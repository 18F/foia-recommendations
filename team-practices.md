# FOIA Discovery Team Practices

This document describes the conventions the FOIA Discovery team has agreed to work under.

## Sprints

We do one-week sprints, with a retro and planning meeting every Monday. We have daily standups
with our 18F team, and daily standups with the DOJ team.

## Issues

We use Github + Zenhub for issue tracking. We create issues as necessary to capture stories
and articulate requirements for specific tasks. Our kanban categories for describing the state of
issues are:

### New

### Icebox

### Backlog

### In Progress

### Review / QA

### Closed

## Pull Requests

All code changes should happen through pull requests (PRs).

New PRs should be assigned to the person who opens the PR.
If a PR is not ready for review and merge, add the `WIP` label to it,
and prefix the PR name with `[WIP]`.

All PRs should be reviewed by one other team member.
As a reviewer, you are not expected to review `WIP` PRs unless specifically requested.
Prioritize PR reviews over other work, so that PRs do not block other team members.

When a PR has an accepted review, either the reviewer or the owner (assignee)
may merge the PR using either the `Squash and merge` or the `Rebase and merge`
Github big green button. Each PR should result in exactly 1 commit to the `master`
branch.
