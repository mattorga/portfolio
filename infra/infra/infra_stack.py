from aws_cdk import (
    # Duration,
    Stack,
    aws_lambda as _lambda,
    aws_iam as iam,
    CfnOutput,
    # aws_sqs as sqs,
)
from constructs import Construct

class InfraStack(Stack):
    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        chat_function = _lambda.Function(
            self, "chatFunction",
            runtime=_lambda.Runtime.PYTHON_3_12,
            handler="handler.main",
            code=_lambda.Code.from_asset("lambda/chat"),
        )

        # Grant Bedrock permissions to the Lambda function
        chat_function.add_to_role_policy(
            iam.PolicyStatement(
                actions=[
                    "bedrock:ListFoundationModels",
                    "bedrock:InvokeModel",
                    "bedrock:InvokeModelWithResponseStream",
                ],
                resources=["*"],
            )
        )

        chat_function_url = chat_function.add_function_url(
            auth_type=_lambda.FunctionUrlAuthType.NONE,
            invoke_mode=_lambda.InvokeMode.RESPONSE_STREAM,
        )

        CfnOutput(self, 'chatFunctionUrlOutput', value=chat_function_url.url)