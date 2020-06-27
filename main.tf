provider "aws" {
  # 事前にAWS CLIで作ってる.
  profile = "s3-adder"
}

resource "aws_s3_bucket" "main" {
  bucket = "s3-spa-deploy"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}