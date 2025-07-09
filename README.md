# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/3b9be350-f6a8-47f6-a06d-fe661ec1ad1c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3b9be350-f6a8-47f6-a06d-fe661ec1ad1c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd hubspot-site-builder-easy

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Running tests

Run unit tests using Vitest. Install dependencies first:

```sh
npm install
npm test
```

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/3b9be350-f6a8-47f6-a06d-fe661ec1ad1c) and click on Share -> Publish.

## Installing the HubSpot theme

1. Navigate to the `src/templates` directory of this repository.
2. Zip the contents of this folder (not the folder itself).
3. In HubSpot, open **Marketing > Files and Templates > Design Tools**.
4. Click **File > Upload** and select the generated ZIP file.
5. After the upload finishes you can create a new page and choose `ki-transformation.html` or `landing-page.html` from the theme templates.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
