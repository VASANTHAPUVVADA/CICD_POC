# Deployment setup

The GitHub Actions workflow validates pull requests, then builds and pushes the `hello-world` image to Amazon ECR when `main` is updated. It deploys that SHA-tagged image to the self-hosted runner. You can also start a deployment from **Actions → Hello World CI/CD → Run workflow**.

## GitHub configuration

Add these repository secrets under **Settings → Secrets and variables → Actions**:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

The configured AWS identity must be able to log in to ECR, push images to the `hello-world` repository, and pull images from it. Create that ECR repository in `ap-south-1` before the first run. The account ID is obtained from the supplied AWS credentials during ECR login.

## Self-hosted runner

Register a GitHub Actions runner on the target Linux server and leave its default `self-hosted` label enabled. The runner account must be able to run Docker commands. Install Docker Engine and ensure the Docker daemon starts after a server reboot.

The workflow publishes the container on host port `80`, mapped to application port `3000`. Allow inbound traffic to port 80 in the server firewall or cloud security group. The container restarts automatically after a reboot.

To use another AWS region, ECR repository, or container name, update the corresponding values in `.github/workflows/cicd.yml`.
