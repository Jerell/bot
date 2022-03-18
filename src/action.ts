import core from "@actions/core";
import github from "@actions/github";
import { context } from "@actions/github";

const GITHUB_TOKEN = core.getInput("GITHUB_TOKEN");
const octokit = github.getOctokit(GITHUB_TOKEN);

const { pull_request } = context.payload;

async function run() {
  await octokit.rest.issues.createComment({
    ...context.repo,
    issue_number: pull_request!.number,
    body: "test",
  });
}

run();
