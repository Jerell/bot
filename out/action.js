"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
const github_1 = __importDefault(require("@actions/github"));
const github_2 = require("@actions/github");
const GITHUB_TOKEN = core_1.default.getInput("GITHUB_TOKEN");
const octokit = github_1.default.getOctokit(GITHUB_TOKEN);
const { pull_request } = github_2.context.payload;
async function run() {
    await octokit.rest.issues.createComment({
        ...github_2.context.repo,
        issue_number: pull_request.number,
        body: "test",
    });
}
run();
