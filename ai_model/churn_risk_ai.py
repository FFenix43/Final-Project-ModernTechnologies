
import csv
import json


# Feature weights (tune as needed)
WEIGHTS = {
    'days_since_last_login': 0.25,
    'satisfaction_score': -0.25,
    'purchase_frequency': -0.15,
    'support_tickets': 0.20,
    'total_spent': -0.15
}

# Score calculation function
def calculate_risk(row):
    score = 0
    score += WEIGHTS['days_since_last_login'] * float(row['days_since_last_login'])
    score += WEIGHTS['satisfaction_score'] * float(row['satisfaction_score'])
    score += WEIGHTS['purchase_frequency'] * float(row['purchase_frequency'])
    score += WEIGHTS['support_tickets'] * float(row['support_tickets'])
    score += WEIGHTS['total_spent'] * float(row['total_spent']) / 100  # scale spending
    score = max(1, min(100, round(score, 2)))
    return score

# Risk label function
def risk_label(score):
    if score >= 70:
        return 'leaving'
    elif score >= 40:
        return 'indecisive'
    else:
        return 'staying'

import os
csv_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../customer_churn_400.csv'))

leaving, indecisive, staying = [], [], []
processed = []

with open(csv_path, newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        score = calculate_risk(row)
        label = risk_label(score)
        entry = {
            'customer_id': row['customer_id'],
            'name': row['name'],
            'ai_score': score,
            'risk_label': label
        }
        processed.append({**row, 'ai_score': score, 'risk_label': label})
        if label == 'leaving':
            leaving.append(entry)
        elif label == 'indecisive':
            indecisive.append(entry)
        else:
            staying.append(entry)

# Save processed dataset
with open('customer_churn_processed.csv', 'w', newline='') as f:
    base_fields = ['customer_id','name','email','join_date','status','last_purchase_date','purchase_frequency','avg_purchase_value','total_spent','days_since_last_login','support_tickets','satisfaction_score']
    fieldnames = base_fields + ['ai_score', 'risk_label']
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    for row in processed:
        filtered_row = {k: row.get(k, '') for k in fieldnames}
        writer.writerow(filtered_row)


# Save categorized results as JSON
results = {
    'leaving': leaving,
    'indecisive': indecisive,
    'staying': staying,
    'summary': {
        'leaving': len(leaving),
        'indecisive': len(indecisive),
        'staying': len(staying)
    }
}
json_path = os.path.join(os.path.dirname(__file__), 'customer_churn_predictions.json')
with open(json_path, 'w') as jf:
    json.dump(results, jf, indent=2)

# Print summary and sample customers in each group (after processing)
def print_group(name, group):
    print(f"\n{name}:")
    for c in group[:5]:  # print first 5 customers
        print(f"ID: {c['customer_id']}, Name: {c['name']}, Score: {c['ai_score']}, Label: {c['risk_label']}")

print(f"Summary: Leaving={len(leaving)}, Indecisive={len(indecisive)}, Staying={len(staying)}")
print_group('Leaving', leaving)
print_group('Indecisive', indecisive)
print_group('Staying', staying)

# Print summary and sample customers in each group
print(f"Summary: Leaving={len(leaving)}, Indecisive={len(indecisive)}, Staying={len(staying)}")
def print_group(name, group):
    print(f"\n{name}:")
    for c in group[:5]:  # print first 5 customers
        print(f"ID: {c['customer_id']}, Name: {c['name']}, Score: {c['ai_score']}, Label: {c['risk_label']}")
print_group('Leaving', leaving)
print_group('Indecisive', indecisive)
print_group('Staying', staying)


# Print summary and sample customers in each group

# Print summary and sample customers in each group (after processing)
def print_group(name, group):
    print(f"\n{name}:")
    for c in group[:5]:  # print first 5 customers
        print(f"ID: {c['customer_id']}, Name: {c['name']}, Score: {c['ai_score']}, Label: {c['risk_label']}")

print(f"Summary: Leaving={len(leaving)}, Indecisive={len(indecisive)}, Staying={len(staying)}")
print_group('Leaving', leaving)
print_group('Indecisive', indecisive)
print_group('Staying', staying)