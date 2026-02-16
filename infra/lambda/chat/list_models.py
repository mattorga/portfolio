import boto3

bedrock = boto3.client(
    service_name='bedrock',
    region_name='ap-southeast-1'
)

foundation_models = bedrock.list_foundation_models()

for model in foundation_models["modelSummaries"]:
    print(f"{model['modelId']} - {model['modelName']}")
