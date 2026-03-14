# !/bin/bash

# Navigate to your project folder
cd "/d/react-jonath/eat-n-split/eat_n_split"

# Initialize git if it hasn't been initialized yet
if [ ! -d ".git" ]; then
  echo "Initializing a new Git repository..."
  git init
  git branch -m main
fi

# Add all files in the directory
echo "Adding all files..."
git add .

# Commit the changes
echo "Committing..."
git commit -m "Initial commit: Eat-N-Split project"

# Check if a remote named 'origin' already exists
if git remote | grep -q 'origin'; then
    echo "Remote 'origin' found. Pushing to main..."
    git push -u origin main
else
    echo "No remote 'origin' found."
    echo "Attempting to create repository 'EatAndSplit' using GitHub CLI (gh)..."
    
    # Use GitHub CLI to create the repo and push
    # You can change --public to --private if you want a private repository
    if gh repo create EatAndSplit --public --source=. --remote=origin --push; then
        echo "Successfully created repository and pushed all files!"
    else
        echo "Error: Failed to create repository."
        echo "Please make sure you have the GitHub CLI (gh) installed and you are logged in (run 'gh auth login')."
    fi
fi
