# MSIT B.Tech Management Quota Admission Form

This is a [Next.js](https://nextjs.org) project designed to create an online application form for admission under the Management Quota at Maharaja Surajmal Institute of Technology (MSIT), New Delhi. The form allows applicants to fill in their details, review their submissions, and download a PDF of their application.

## Features

- **Program Selection**: Applicants can select their desired program and shift (e.g., CSE, IT, ECE, EEE).
- **Personal Details**: Collects applicant information such as name, date of birth, email, and phone number.
- **Educational Details**: Captures 10th and 12th examination details, including board, roll number, year of passing, and marks.
- **Document Uploads**: Allows applicants to provide links to their 10th and 12th marksheets and other required documents.
- **Payment Details**: Collects payment transaction details for the application fee.
- **Review and Submit**: Consolidates all entered information into a single section for review and allows applicants to download the form as a PDF using `html2canvas` and `jsPDF`.

## Technologies Used

- **Next.js**: Framework for building the application.
- **Tailwind CSS**: For styling the application.
- **html2canvas**: For capturing the form as an image.
- **jsPDF**: For generating a downloadable PDF.
- **React**: For building reusable components.
- **TypeScript**: For type safety and better development experience.

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-repo/msit-admission-form.git
cd msit-admission-form
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

The project is organized as follows:

```
src/
├── app/
│   ├── layout.tsx         # Root layout for the application
│   ├── page.tsx           # Main application form
│   ├── sections/          # Individual sections of the form
│       ├── ProgramSelection.tsx
│       ├── ApplicantDetails.tsx
│       ├── EducationDetails.tsx
│       ├── DocumentDetails.tsx
│       ├── PaymentDetails.tsx
│       ├── ReviewAndSubmit.tsx
├── components/ui/         # Reusable UI components
├── styles/                # Global styles
```

## Key Components

### 1. **Program Selection**
Allows applicants to select their desired program and shift. Includes radio buttons for first-year and lateral-entry programs.

### 2. **Personal Details**
Captures applicant information such as name, date of birth, email, and phone number.

### 3. **Educational Details**
Collects detailed information about the applicant's 10th and 12th examination results, including:
- Board
- Roll Number
- Year of Passing
- Subject-wise marks
- Aggregate percentage

### 4. **Document Uploads**
Applicants can provide links to their 10th and 12th marksheets and other required documents.

### 5. **Payment Details**
Captures payment transaction details, including:
- Transaction ID
- Payment Date
- Amount Paid

### 6. **Review and Submit**
Consolidates all entered information into a single section for review. Allows applicants to download the form as a PDF.

## PDF Generation

The "Review and Submit" section uses `html2canvas` and `jsPDF` to generate a downloadable PDF of the application form. The entire form is wrapped in a `#download` div to ensure all information is captured.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com). Follow these steps:

1. Push your code to a GitHub repository.
2. Connect your repository to Vercel.
3. Deploy your application with a single click.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn how to style your application.
- [html2canvas Documentation](https://html2canvas.hertzen.com/) - Learn how to capture DOM elements as images.
- [jsPDF Documentation](https://github.com/parallax/jsPDF) - Learn how to generate PDFs in JavaScript.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.