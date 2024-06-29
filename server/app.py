from flask import Flask, request, jsonify
import pandas as pd
import random

app = Flask(__name__)

# Load your dataset
food_df = pd.read_csv("C:\\Users\\adity\\Desktop\\Hackathon\\server\\Final_Dataset2.csv")

def create_user_profile(age, gender, height, weight, activity_level, health_goal, diet_type, allergies=None):
    if gender.lower() == 'male':
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    else:
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
    
    activity_factors = {'sedentary': 1.2, 'light': 1.375, 'moderate': 1.55, 'active': 1.725, 'very active': 1.9}
    tdee = bmr * activity_factors.get(activity_level.lower(), 1.2)
    
    if health_goal.lower() == 'weight loss':
        calorie_target = tdee - 500
    elif health_goal.lower() == 'weight gain':
        calorie_target = tdee + 500
    else:
        calorie_target = tdee
    
    protein_target = calorie_target * 0.3 / 4
    carb_target = calorie_target * 0.5 / 4
    fat_target = calorie_target * 0.2 / 9
    
    return {
        'calorie_target': calorie_target,
        'protein_target': protein_target,
        'carb_target': carb_target,
        'fat_target': fat_target,
        'diet_type': diet_type,
        'allergies': allergies or []
    }

def is_vegan(food_item):
    vegan_categories = ['Fruits', 'Vegetables', 'Grains', 'Legumes', 'Nuts', 'Seeds']
    non_vegan_keywords = ['meat', 'chicken', 'beef', 'pork', 'fish', 'egg', 'milk', 'cheese', 'yogurt', 'butter']
    
    if food_item['Category'] in vegan_categories:
        return True
    if any(keyword in food_item['food items'].lower() for keyword in non_vegan_keywords):
        return False
    # If we're not sure, we'll assume it's vegan
    return True

food_df['is_vegan'] = food_df.apply(is_vegan, axis=1)

def score_food(food_item, user_profile):
   score = 0
   calorie_target = user_profile['calorie_target']
    
   if food_item['Allergy'] in user_profile['allergies']:
        return -1000
    
   if user_profile['diet_type'] == 'vegan':
        if 'is_vegan' in food_item and not food_item['is_vegan']:
            return -1000
        elif 'is_vegan' not in food_item and not is_vegan(food_item):
            return -1000
    
   calorie_ratio = food_item['Calories'] / calorie_target
   if 0.05 <= calorie_ratio <= 0.3:
        score += 1
    
   protein_score = 1 - abs(food_item['Protein'] / user_profile['protein_target'] - calorie_ratio)
   carb_score = 1 - abs(food_item['Carbs'] / user_profile['carb_target'] - calorie_ratio)
   fat_score = 1 - abs(food_item['Total Fat'] / user_profile['fat_target'] - calorie_ratio)
   score += (protein_score + carb_score + fat_score) / 3
    
   score += random.uniform(0, 0.1)
   return score

def generate_single_meal(user_profile, food_df, calorie_target, meal_type):
    meal_foods = []
    meal_calories = 0
    meal_protein = 0
    meal_carbs = 0
    meal_fat = 0
    
    min_meal_calories = calorie_target * 0.8
    max_meal_calories = calorie_target * 1.2
    
    food_df['score'] = food_df.apply(lambda x: score_food(x, user_profile), axis=1)
    sorted_foods = food_df.sort_values('score', ascending=False)
    
    for _, food in sorted_foods.iterrows():
        if meal_calories + food['Calories'] <= max_meal_calories:
            if (user_profile['diet_type'] == 'vegan' and ('is_vegan' not in food or food['is_vegan'])) or user_profile['diet_type'] == 'non-vegan':
                meal_foods.append(food['food items'])
                meal_calories += food['Calories']
                meal_protein += food['Protein']
                meal_carbs += food['Carbs']
                meal_fat += food['Total Fat']
                
                if meal_calories >= min_meal_calories:
                    break
    
    return meal_foods, {
        'calories': meal_calories,
        'protein': meal_protein,
        'carbs': meal_carbs,
        'fat': meal_fat
    }

def generate_meal_plan(user_profile, food_df):
    daily_target = user_profile['calorie_target']
    meal_targets = {
        'Breakfast': daily_target * 0.25,
        'Lunch': daily_target * 0.35,
        'Dinner': daily_target * 0.40
    }
    
    meal_plan = {}
    nutrition_summary = {
        'calories': 0,
        'protein': 0,
        'carbs': 0,
        'fat': 0
    }

    for meal, target in meal_targets.items():
        meal_foods, meal_nutrition = generate_single_meal(user_profile, food_df, target, meal)
        meal_plan[meal] = meal_foods
        
        for key in nutrition_summary:
            nutrition_summary[key] += meal_nutrition[key]

    return meal_plan, nutrition_summary

def get_diet_recommendation(user_info, food_df):
    user_profile = create_user_profile(
        user_info['age'], user_info['gender'], user_info['height'], 
        user_info['weight'], user_info['activity_level'], 
        user_info['health_goal'], user_info['diet_type'],
        user_info.get('allergies')
    )
    meal_plan, nutrition_summary = generate_meal_plan(user_profile, food_df)
    return {
        'meal_plan': meal_plan,
        'nutrition_summary': nutrition_summary,
        'target_calories': user_profile['calorie_target']
    }

@app.route('/recommend', methods=['POST'])
def recommend():
    user_info = request.json
    recommendation = get_diet_recommendation(user_info, food_df)
    return jsonify(recommendation)

if __name__ == '__main__':
    app.run(debug=True)
