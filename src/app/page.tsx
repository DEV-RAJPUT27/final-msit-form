/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas-pro"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { School, User, BookOpen, FileText, CreditCard } from "lucide-react"
import ProgramSelection from "./sections/ProgramSelection"
import EducationDetails from "./sections/EducationDetails"
import DocumentDetails from "./sections/DocumentDetails"
import PaymentDetails from "./sections/PaymentDetails"
import ApplicantDetails from "./sections/ApplicantDetails"
import ReviewAndSubmit from "./sections/ReviewAndSubmit"
import Loader from "@/app/loader"

// import sample from "@/../sample.json"

export default function AdmissionForm() {
  const [dateTime, setDateTime] = useState("");
  const [activeTab, setActiveTab] = useState("program");
  const [progress, setProgress] = useState(20);

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    programSelection: {
      firstYearProgram: "", // CSE-1st Shift, CSE-2nd Shift, etc.
      secondYearProgram: "", // For LE to B.Tech
      programmeName: "",
      programmeCode: "",
      preferredShift: "",
      registrationNumber: "", // GGSIPU Online Application Form
      registrationDate: "",
      rollNumber: "", // NLT(JEE)/CET Roll No
      rank: "", // NLT(JEE)/CET Rank
    },

    // Applicant Details fields
    applicant: {
      name: "", // Candidate's name in capital
      fatherName: "",
      motherName: "",
      dob: "",
      address: "", // Complete postal address with pin code
      contact: "",
      email: "",
      category: "", // SC, ST, Defence, PWD, General
      categoryCertificate: "", // Drive link for certificate
      region: "", // Delhi Region or Outside Delhi
    },

    // Education Details - 10th
    tenth: {
      board: "",
      rollNumber: "",
      yearOfPassing: "",
      subjects: {
        subject1: { name: "", marks: "" },
        subject2: { name: "", marks: "" },
        subject3: { name: "", marks: "" },
        subject4: { name: "", marks: "" },
        subject5: { name: "", marks: "" },
        subject6: { name: "", marks: "" },
      },
      totalMarksObtained: "",
      maximumMarks: "",
      percentage: "",
      marksheetLink: "",
    },

    // Education Details - 12th
    twelfth: {
      board: "",
      rollNumber: "",
      yearOfPassing: "",
      subjects: {
        subject1: { name: "", marks: "" },
        subject2: { name: "", marks: "" },
        subject3: { name: "", marks: "" },
        subject4: { name: "", marks: "" },
        subject5: { name: "", marks: "" },
        subject6: { name: "", marks: "" },
      },
      pcmMarks: "",
      pcmPercentage: "",
      totalMarksObtained: "",
      maximumMarks: "",
      percentage: "",
      marksheetLink: "",
    },

    // Education Details - Diploma (For Lateral Entry)
    diploma: {
      university: "",
      rollNumber: "",
      firstYear: {
        yearOfPassing: "",
        subjects: "",
        maximumMarks: "",
        marksObtained: "",
        percentage: "",
      },
      secondYear: {
        subjects: "",
        maximumMarks: "",
        marksObtained: "",
        percentage: "",
      },
      thirdYear: {
        subjects: "",
        maximumMarks: "",
        marksObtained: "",
        percentage: "",
      },
      aggregate: {
        maximumMarks: "",
        marksObtained: "",
        percentage: "",
      },
      marksheetLink: "",
    },

    // Document Details
    documents: {
      photoLink: "",
      admitCardLink: "",
      ipuFormLink: "",
      candidateSignatureLink: "",
      parentSignatureLink: "",
      gapCertificateLink: "",
      aadharCardLink: "",
    },

    payment: {
      paymentProofLink: "",
    }
  });

  useEffect(() => {
    updateDateTime();
    // setFormData(sample);
  }, [])

  useEffect(() => {
    // Update progress based on active tab
    const progressMap: Record<string, number> = {
      program: 20,
      personal: 40,
      education: 60,
      documents: 80,
      payment: 90,
      review: 100,
    }
    setProgress(progressMap[activeTab] || 20)
  }, [activeTab])

  const updateDateTime = () => {
    const now = new Date()
    const dateTimeString = "Date and time: " + now.toLocaleString()
    setDateTime(dateTimeString)
  }

  const checkForm = () => {
    // Simple mapping of sections to tabs for navigation
    const sectionToTab = {
      programSelection: "program",
      applicant: "personal",
      tenth: "education",
      twelfth: "education",
      diploma: "education",
      documents: "documents",
      payment: "payment"
    };

    // Special case: Check if at least one program is selected
    if (!formData.programSelection.firstYearProgram && !formData.programSelection.secondYearProgram) {
      alert("Please select either First Year Program or Second Year Program");
      setActiveTab("program");
      return false;
    }

    // Simple field validations with just field name and label
    const fieldsToValidate = {
      programSelection: [
        { field: 'programmeName', label: 'Programme Name' },
        { field: 'preferredShift', label: 'Preferred Shift' },
        { field: 'programmeCode', label: 'Programme Code' },
        { field: 'registrationNumber', label: 'Registration Number' },
        { field: 'registrationDate', label: 'Registration Date' },
      ],
      applicant: [
        { field: 'name', label: 'Candidate Name' },
        { field: 'fatherName', label: "Father's Name" },
        { field: 'motherName', label: "Mother's Name" },
        { field: 'dob', label: 'Date of Birth' },
        { field: 'address', label: 'Address' },
        { field: 'contact', label: 'Contact Number' },
        { field: 'email', label: 'Email Address' },
        { field: 'category', label: 'Category' },
        { field: 'region', label: 'Region' },
      ],
      tenth: [
        { field: 'board', label: '10th Board' },
        { field: 'rollNumber', label: '10th Roll Number' },
        { field: 'yearOfPassing', label: '10th Year of Passing' },
        { field: 'totalMarksObtained', label: '10th Total Marks Obtained' },
        { field: 'maximumMarks', label: '10th Maximum Marks' },
        { field: 'percentage', label: '10th Percentage' },
        { field: 'marksheetLink', label: '10th Marksheet Link' },
      ],
      twelfth: [
        { field: 'board', label: '12th Board' },
        { field: 'rollNumber', label: '12th Roll Number' },
        { field: 'yearOfPassing', label: '12th Year of Passing' },
        { field: 'totalMarksObtained', label: '12th Total Marks Obtained' },
        { field: 'maximumMarks', label: '12th Maximum Marks' },
        { field: 'percentage', label: '12th Percentage' },
        { field: 'marksheetLink', label: '12th Marksheet Link' },
      ],
      documents: [
        { field: 'photoLink', label: 'Photograph Link' },
        { field: 'candidateSignatureLink', label: 'Candidate Signature Link' },
        { field: 'aadharCardLink', label: 'Aadhar Card Link' },
      ],
      payment: [
        { field: 'paymentProofLink', label: 'Payment Proof Link' },
      ]
    };

    // Loop through all sections and fields
    for (const [section, fields] of Object.entries(fieldsToValidate)) {
      const sectionKey = section as keyof typeof formData;
      for (const { field, label } of fields) {
        const sectionData = formData[sectionKey];
        const value = (sectionData as any)[field];
        if (!value || (typeof value === 'string' && value.trim() === '')) {
          alert(`Please enter ${label}`);
          setActiveTab(sectionToTab[sectionKey]);
          return false;
        }
      }
    }

    // Simple format validations
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.applicant.email)) {
      alert("Please enter a valid email address");
      setActiveTab("personal");
      return false;
    }

    if (!/^\d{10}$/.test(formData.applicant.contact)) {
      alert("Please enter a valid 10-digit contact number");
      setActiveTab("personal");
      return false;
    }

    return true;
  };

  const savePdf = async () => {
    if (!checkForm()) {
      return;
    }

    try {
      setIsLoading(true);
      const buttonsToHide = document.querySelectorAll("button, .TabsList, .CardFooter,#view_original_document");
      buttonsToHide.forEach(el => (el as HTMLElement).style.display = "none");
      const container = document.getElementById("download");
      if (!container) return;

      container.style.width = "1024px";
      container.style.maxWidth = "1024px";

      const textElements = container.querySelectorAll("p, div, span, h1, h2, h3, h4, h5, h6");
      textElements.forEach(el => (el as HTMLElement).style.lineHeight = "1.5");

      container.style.backgroundColor = "white";

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const headerHeight = 30;
      const contentWidth = pageWidth - 2 * margin;

      const logoImg = new Image();
      logoImg.src = '/logo.png';

      await new Promise((resolve, reject) => {
        logoImg.onload = resolve;
        logoImg.onerror = reject;
      });

      const logoWidth = 30;
      const logoHeight = logoWidth * (logoImg.height / logoImg.width);

      pdf.addImage(logoImg, 'PNG', margin, margin, logoWidth, logoHeight);

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.text("Maharaja Surajmal Institute of Technology", margin + logoWidth + 5, margin + 7);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.text("Affiliated to GGSIPU | NAAC Accredited 'A' Grade | NBA (CSE, IT, ECE,EEE)", margin + logoWidth + 5, margin + 12);
      pdf.text("Approved by AICTE | ISO 9001:2015 Certified", margin + logoWidth + 5, margin + 16);
      pdf.text(`Date and Time of submission : ${new Date().toLocaleString()}`, margin + logoWidth + 5, margin + 25);

      pdf.setDrawColor(0, 51, 153);
      pdf.setLineWidth(0.5);
      pdf.line(margin, margin + headerHeight + 2, pageWidth - margin, margin + headerHeight + 2);

      const contentStartY = margin + headerHeight + 5;

      const pageDivs = [
        document.getElementById("page1"),
        document.getElementById("page2"),
        document.getElementById("page3")
      ].filter(Boolean);

      for (let i = 0; i < pageDivs.length; i++) {
        const pageDiv: any = pageDivs[i];

        if (i > 0) {
          pdf.addPage();
        }

        const canvas = await html2canvas(pageDiv, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "white",
          logging: false,
          width: 1024,
          windowWidth: 1024
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        const aspectRatio = canvas.height / canvas.width;
        const contentHeight = contentWidth * aspectRatio;


        if (i === 0) {
          if (contentHeight > pageHeight - contentStartY - margin) {
            const scale = (pageHeight - contentStartY - margin) / contentHeight;
            const adjustedHeight = contentHeight * scale;
            const adjustedWidth = contentWidth * scale;

            pdf.addImage(imgData, 'JPEG', margin, contentStartY, adjustedWidth, adjustedHeight);
          } else {
            pdf.addImage(imgData, 'JPEG', margin, contentStartY, contentWidth, contentHeight);
          }
        }
        else {
          if (contentHeight > pageHeight - 2 * margin) {
            const scale = (pageHeight - 2 * margin) / contentHeight;
            const adjustedHeight = contentHeight * scale;
            const adjustedWidth = contentWidth * scale;

            pdf.addImage(imgData, 'JPEG', margin, margin, adjustedWidth, adjustedHeight);
          } else {
            pdf.addImage(imgData, 'JPEG', margin, margin, contentWidth, contentHeight);
          }
        }
      }

      const pageCount = pdf.getNumberOfPages();
      pdf.setPage(pageCount);
      pdf.setTextColor(0, 0, 0);

      pdf.save("MSIT_MANAGEMENT_Application_Form.pdf");

      setTimeout(() => {
        localStorage.setItem("isformSubmitted", "true");
        window.open("/confirmation", "_self");
      }, 100);

    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      const container = document.getElementById("download");
      if (container) {
        container.style.width = "";
        container.style.maxWidth = "";

        const textElements = container.querySelectorAll("p, div, span, h1, h2, h3, h4, h5, h6");
        textElements.forEach(el => (el as HTMLElement).style.lineHeight = "");
        container.style.backgroundColor = "";
      }

      const buttonsToHide = document.querySelectorAll("button, .TabsList, .CardFooter");
      buttonsToHide.forEach(el => (el as HTMLElement).style.display = "");

      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (checkForm()) {
      try {
        setIsLoading(true);
        const params = new URLSearchParams();

        // Program Selection
        params.append('entry.433309496', formData.programSelection.firstYearProgram);
      params.append('entry.83785704', formData.programSelection.secondYearProgram);
      params.append('entry.1744013705', formData.programSelection.programmeName);
      params.append('entry.1978168265', formData.programSelection.preferredShift);
      params.append('entry.569038236', formData.programSelection.programmeCode);
      params.append('entry.644314276', formData.programSelection.registrationNumber);

      // Registration Date (single field)
      if (formData.programSelection.registrationDate) {
        params.append('entry.30827969', formData.programSelection.registrationDate);
      }

      params.append('entry.963554904', formData.programSelection.rollNumber);
      params.append('entry.1707921178', formData.programSelection.rank);

      // =============================
      // APPLICANT DETAILS
      // =============================
      params.append('entry.1964670639', formData.applicant.name);

      if (formData.applicant.dob) {
        params.append('entry.139626426', formData.applicant.dob);
      }

      params.append('entry.791976098', formData.applicant.fatherName);
      params.append('entry.989733864', formData.applicant.motherName);
      params.append('entry.1148572364', formData.applicant.address);
      params.append('entry.2084908874', formData.applicant.contact);
      params.append('entry.784906392', formData.applicant.email);
      params.append('entry.1481835549', formData.applicant.category);
      params.append('entry.1593674183', formData.applicant.categoryCertificate);
      params.append('entry.334708619', formData.applicant.region);

      // =============================
      // 10th DETAILS
      // =============================
      params.append('entry.2052037177', formData.tenth.board);
      params.append('entry.1806255556', formData.tenth.rollNumber);
      params.append('entry.1498488309', formData.tenth.yearOfPassing);

      params.append('entry.561755611', formData.tenth.subjects.subject1.name);
      params.append('entry.1715097548', formData.tenth.subjects.subject1.marks);

      params.append('entry.610177237', formData.tenth.subjects.subject2.name);
      params.append('entry.2045218598', formData.tenth.subjects.subject2.marks);

      params.append('entry.935514256', formData.tenth.subjects.subject3.name);
      params.append('entry.1280036078', formData.tenth.subjects.subject3.marks);

      params.append('entry.1621925148', formData.tenth.subjects.subject4.name);
      params.append('entry.1879435139', formData.tenth.subjects.subject4.marks);

      params.append('entry.702125792', formData.tenth.subjects.subject5.name);
      params.append('entry.1012298914', formData.tenth.subjects.subject5.marks);

      params.append('entry.197217640', formData.tenth.subjects.subject6.name);
      params.append('entry.1339414118', formData.tenth.subjects.subject6.marks);

      params.append('entry.653123080', formData.tenth.totalMarksObtained);
      params.append('entry.2056899500', formData.tenth.maximumMarks);
      params.append('entry.1065096890', formData.tenth.percentage);
      params.append('entry.1007697033', formData.tenth.marksheetLink);

      // =============================
      // 12th DETAILS
      // =============================
      params.append('entry.42676692', formData.twelfth.board);
      params.append('entry.796513284', formData.twelfth.rollNumber);
      params.append('entry.994859345', formData.twelfth.yearOfPassing);

      params.append('entry.342954827', formData.twelfth.subjects.subject1.name);
      params.append('entry.515890931', formData.twelfth.subjects.subject1.marks);

      params.append('entry.1480422984', formData.twelfth.subjects.subject2.name);
      params.append('entry.403004829', formData.twelfth.subjects.subject2.marks);

      params.append('entry.1595554408', formData.twelfth.subjects.subject3.name);
      params.append('entry.1157164933', formData.twelfth.subjects.subject3.marks);

      params.append('entry.1247986183', formData.twelfth.subjects.subject4.name);
      params.append('entry.2100744946', formData.twelfth.subjects.subject4.marks);

      params.append('entry.88728670', formData.twelfth.subjects.subject5.name);
      params.append('entry.308997297', formData.twelfth.subjects.subject5.marks);

      params.append('entry.512466623', formData.twelfth.subjects.subject6.name);
      params.append('entry.30267842', formData.twelfth.subjects.subject6.marks);

      params.append('entry.279798850', formData.twelfth.totalMarksObtained);
      params.append('entry.2076733634', formData.twelfth.maximumMarks);
      params.append('entry.2064834504', formData.twelfth.percentage);
      params.append('entry.766698057', formData.twelfth.marksheetLink);

      // =============================
      // DIPLOMA DETAILS
      // =============================
      params.append('entry.84406839', formData.diploma.university);
      params.append('entry.223991078', formData.diploma.rollNumber);

      params.append('entry.360810194', formData.diploma.firstYear.subjects);
      params.append('entry.1340368622', formData.diploma.firstYear.maximumMarks);
      params.append('entry.872240053', formData.diploma.firstYear.marksObtained);
      params.append('entry.1365305965', formData.diploma.firstYear.percentage);

      params.append('entry.1105852746', formData.diploma.secondYear.subjects);
      params.append('entry.225100023', formData.diploma.secondYear.maximumMarks);
      params.append('entry.1440484553', formData.diploma.secondYear.marksObtained);
      params.append('entry.371585222', formData.diploma.secondYear.percentage);

      // =============================
      // META
      // =============================
      params.append('fvv', '1');
      params.append('fbzx', Date.now().toString());
      params.append('pageHistory', '0');

        const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdItCPn-Op1wpy1qs87T_A0e67pBUkNroDOPq5G6kEgIoPeLQ/formResponse';

        // Create a hidden iframe
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.name = 'gform_iframe';
        document.body.appendChild(iframe);

        // Create a form in the iframe
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          const form = iframeDoc.createElement('form');
          form.method = 'POST';
          form.action = formUrl;
          form.target = 'gform_iframe'; // Target the iframe to avoid page reload

          // Add all parameters as hidden inputs
          params.forEach((value, key) => {
            const input = iframeDoc.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            form.appendChild(input);
          });

          iframeDoc.body.appendChild(form);

          // Submit the form
          form.submit();

          console.log("Form submitted to Google Form");

          // Wait for submission and show success message
          setTimeout(() => {
            try {
              document.body.removeChild(iframe);
            } catch (e:any) {
              console.log("Iframe already removed", e);
            }
            alert("Form submitted successfully! Please press OK to download the processed form.");
            savePdf();
          }, 2500);
        }

      } catch (error) {
        console.error("Error submitting form:", error);
        setIsLoading(false);
        alert("There was an error submitting your form. Please try again.");
      }
    }
  };

  const nextTab = () => {
    const tabs = ["program", "personal", "education", "documents", "payment", "review"]
    const currentIndex = tabs.indexOf(activeTab)
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1])
    }
  }

  const prevTab = () => {
    const tabs = ["program", "personal", "education", "documents", "payment", "review"]
    const currentIndex = tabs.indexOf(activeTab)
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1])
    }
  }

  const handleFormDataChange = (section: string, field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }))
  }


  const handleNestedFormDataChange = (section: string, nestedField: string, field: string, value: any) => {
    setFormData((prev: any) => {

      if (nestedField.includes('subjects') && field.includes('subject')) {
        const [subjectKey, property] = field.split('.');

        return {
          ...prev,
          [section]: {
            ...prev[section as keyof typeof prev],
            subjects: {
              ...prev[section as keyof typeof prev].subjects,
              [subjectKey]: {
                ...prev[section as keyof typeof prev].subjects[subjectKey as keyof typeof prev[keyof typeof prev]['subjects']],
                [property]: value
              }
            }
          }
        };
      }

      if (section && nestedField && field) {
        return {
          ...prev,
          [section]: {
            ...prev[section as keyof typeof prev],
            [nestedField]: {
              ...prev[section as keyof typeof prev][nestedField as keyof typeof prev[keyof typeof prev]],
              [field]: value
            }
          }
        };
      }

      return prev;
    });
  };

  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${isLoading && "group:overflow-hidden"}`}>
      {isLoading && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-2xl flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Loader />
            <p className="mt-4 text-gray-700 font-medium">Processing your submission...</p>
          </div>
        </div>
      )}
      <div className="max-w-5xl mx-auto px-4">
        <Card className="shadow-lg border-0 py-0">
          <CardHeader className="bg-gradient-to-r py-5 from-blue-600 to-blue-800 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">
              B.Tech Management Quota Admission Application Form 2026-27
            </CardTitle>
            <CardDescription className="text-gray-100 text-center px-10">
              Application Form for admission under Management Quota Seats of GGSIPU, Delhi in
              <br />Maharaja Surajmal Institute of Technology, C-4, Janakpuri, New Delhi-110058
              for the Academic Session 2025-2026
            </CardDescription>
            <div className="text-sm text-gray-100 text-center mt-2">{dateTime}</div>
          </CardHeader>

          <div className="px-6 pt-6">
            <Progress value={progress} className="h-2 mb-6" />
          </div>

          <form id="myForm" onSubmit={handleSubmit}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-6 mb-8 mx-6">
                <TabsTrigger value="program" className="flex items-center gap-2 cursor-pointer">
                  <School className="h-4 w-4" />
                  <span className="hidden sm:inline">Program</span>
                </TabsTrigger>
                <TabsTrigger value="personal" className="flex items-center gap-2 cursor-pointer">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Applicant</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2 cursor-pointer">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Education</span>
                </TabsTrigger>
                <TabsTrigger value="documents" className="flex items-center gap-2 cursor-pointer">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Documents</span>
                </TabsTrigger>
                <TabsTrigger value="payment" className="flex items-center gap-2 cursor-pointer">
                  <CreditCard className="h-4 w-4" />
                  <span className="hidden sm:inline">Payment</span>
                </TabsTrigger>
                <TabsTrigger value="review" className="flex items-center gap-2 cursor-pointer">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Review</span>
                </TabsTrigger>
              </TabsList>

              {/* Program Selection Tab */}
              <ProgramSelection
                formData={formData.programSelection}
                handleFormDataChange={(field, value) => handleFormDataChange('programSelection', field, value)}
                nextTab={nextTab}
              />

              {/* Personal Details Tab */}
              <ApplicantDetails
                formData={formData.applicant}
                handleFormDataChange={(field, value) => handleFormDataChange('applicant', field, value)}
                nextTab={nextTab}
                prevTab={prevTab}
              />

              {/* Education Tab */}
              <EducationDetails
                formData={{ tenth: formData.tenth, twelfth: formData.twelfth, diploma: formData.diploma }}
                handleFormDataChange={handleFormDataChange}
                handleNestedFormDataChange={handleNestedFormDataChange}
                nextTab={nextTab}
                prevTab={prevTab}
              />

              {/* Documents Tab */}
              <DocumentDetails
                formData={formData.documents}
                handleFormDataChange={(field, value) => handleFormDataChange('documents', field, value)}
                nextTab={nextTab}
                prevTab={prevTab}
              />

              {/* Payment Tab */}
              <PaymentDetails
                formData={formData.payment}
                handleFormDataChange={(field, value) => handleFormDataChange('payment', field, value)}
                prevTab={prevTab}
                nextTab={nextTab}
              />

              {/* Review and Submit Tab */}
              <ReviewAndSubmit
                formData={formData}
                prevTab={prevTab}
                handleSubmit={handleSubmit}
              />

            </Tabs>
          </form>
        </Card>
      </div>
    </div>
  )
}
