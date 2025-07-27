# ✅ Package your index.py
data "archive_file" "lambda_zip" {
  type        = "zip"
  source_file = "${path.module}/index.py"
  output_path = "${path.module}/lambda.zip"
}

# ✅ Create Lambda using existing role
resource "aws_lambda_function" "test_resume_aws" {
  function_name = "test-resume-aws"

  role          = "arn:aws:iam::900110977582:role/service-role/resume-aws-role-w4lg08ds"

  handler       = "index.lambda_handler"
  runtime       = "python3.12"

  filename         = "${path.module}/lambda.zip"
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256
}

# ✅ Add Lambda Function URL resource
resource "aws_lambda_function_url" "test_resume_aws_url" {
  function_name      = aws_lambda_function.test_resume_aws.function_name
  authorization_type = "NONE"  # Public URL — use "AWS_IAM" for secure
}

# ✅ Output the Function URL to your CLI
output "lambda_function_url" {
  value = aws_lambda_function_url.test_resume_aws_url.function_url
}
