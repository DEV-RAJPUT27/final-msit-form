/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface EducationDetailsProps {
  formData: {
    tenth: {
      board: string;
      rollNumber: string;
      yearOfPassing: string;
      subjects: {
        subject1: { name: string; marks: string };
        subject2: { name: string; marks: string };
        subject3: { name: string; marks: string };
        subject4: { name: string; marks: string };
        subject5: { name: string; marks: string };
        subject6: { name: string; marks: string };
      };
      totalMarksObtained: string;
      maximumMarks: string;
      percentage: string;
      marksheetLink: string;
    };
    twelfth: {
      board: string;
      rollNumber: string;
      yearOfPassing: string;
      subjects: {
        subject1: { name: string; marks: string };
        subject2: { name: string; marks: string };
        subject3: { name: string; marks: string };
        subject4: { name: string; marks: string };
        subject5: { name: string; marks: string };
        subject6: { name: string; marks: string };
      };
      pcmMarks: string;
      pcmPercentage: string;
      totalMarksObtained: string;
      maximumMarks: string;
      percentage: string;
      marksheetLink: string;
    };
    diploma: {
      university: string;
      rollNumber: string;
      firstYear: {
        yearOfPassing: string;
        subjects: string;
        maximumMarks: string;
        marksObtained: string;
        percentage: string;
      };
      secondYear: {
        subjects: string;
        maximumMarks: string;
        marksObtained: string;
        percentage: string;
      };
      thirdYear: {
        subjects: string;
        maximumMarks: string;
        marksObtained: string;
        percentage: string;
      };
      marksheetLink: string;
    };
  };
  handleFormDataChange: (section: string, field: string, value: any) => void;
  handleNestedFormDataChange: (section: string, nestedField: string, field: string, value: any) => void;
  nextTab: () => void;
  prevTab: () => void;
}

const EducationDetails: React.FC<EducationDetailsProps> = ({
  formData,
  handleFormDataChange,
  handleNestedFormDataChange,
  nextTab,
  prevTab
}) => {

  return (
    <TabsContent value="education" className="px-6 pb-6">
      <Card>
        <CardHeader>
          <CardTitle>Educational Qualifications</CardTitle>
          <CardDescription>Please provide your educational details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* 10th Class Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Class X (High School) Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="tenth-board">Board *</Label>
                <Input
                  id="tenth-board"
                  name="entry.2076445764"
                  placeholder="CBSE/ICSE/State Board"
                  value={formData.tenth.board}
                  onChange={(e) => handleFormDataChange("tenth", "board", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tenth-roll">Roll Number *</Label>
                <Input
                  id="tenth-roll"
                  name="entry.1911703428"
                  placeholder="Enter roll number"
                  value={formData.tenth.rollNumber}
                  onChange={(e) => handleFormDataChange("tenth", "rollNumber", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tenth-year">Year of Passing *</Label>
                <Input
                  id="tenth-year"
                  type="number"
                  name="entry.155950913"
                  placeholder="YYYY"
                  min="2000"
                  max="2023"
                  value={formData.tenth.yearOfPassing}
                  onChange={(e) => handleFormDataChange("tenth", "yearOfPassing", e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Subject details for 10th */}
            <div className="space-y-4 mb-4">
              <h4 className="font-medium">Subject Details</h4>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="tenth-subject1-name">Subject 1 Name</Label>
                  <Input
                    id="tenth-subject1-name"
                    name="entry.tenth.subject1.name"
                    placeholder="Enter subject name"
                    value={formData.tenth.subjects.subject1.name}
                    onChange={(e) => handleNestedFormDataChange("tenth", "subjects", "subject1.name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tenth-subject1-marks">Subject 1 Marks</Label>
                  <Input
                    id="tenth-subject1-marks"
                    name="entry.tenth.subject1.marks"
                    placeholder="Enter marks"
                    type="number"
                    value={formData.tenth.subjects.subject1.marks}
                    onChange={(e) => handleNestedFormDataChange("tenth", "subjects", "subject1.marks", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="tenth-subject2-name">Subject 2 Name</Label>
                  <Input
                    id="tenth-subject2-name"
                    name="entry.tenth.subject2.name"
                    placeholder="Enter subject name"
                    value={formData.tenth.subjects.subject2.name}
                    onChange={(e) => handleNestedFormDataChange("tenth", "subjects", "subject2.name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tenth-subject2-marks">Subject 2 Marks</Label>
                  <Input
                    id="tenth-subject2-marks"
                    name="entry.tenth.subject2.marks"
                    placeholder="Enter marks"
                    type="number"
                    value={formData.tenth.subjects.subject2.marks}
                    onChange={(e) => handleNestedFormDataChange("tenth", "subjects", "subject2.marks", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="tenth-subject3-name">Subject 3 Name</Label>
                  <Input
                    id="tenth-subject3-name"
                    name="entry.tenth.subject3.name"
                    placeholder="Enter subject name"
                    value={formData.tenth.subjects.subject3.name}
                    onChange={(e) => handleNestedFormDataChange("tenth", "subjects", "subject3.name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tenth-subject3-marks">Subject 3 Marks</Label>
                  <Input
                    id="tenth-subject3-marks"
                    name="entry.tenth.subject3.marks"
                    placeholder="Enter marks"
                    type="number"
                    value={formData.tenth.subjects.subject3.marks}
                    onChange={(e) => handleNestedFormDataChange("tenth", "subjects", "subject3.marks", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="tenth-subject4-name">Subject 4 Name</Label>
                  <Input
                    id="tenth-subject4-name"
                    name="entry.tenth.subject4.name"
                    placeholder="Enter subject name"
                    value={formData.tenth.subjects.subject4.name}
                    onChange={(e) => handleNestedFormDataChange("tenth", "subjects", "subject4.name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tenth-subject4-marks">Subject 4 Marks</Label>
                  <Input
                    id="tenth-subject4-marks"
                    name="entry.tenth.subject4.marks"
                    placeholder="Enter marks"
                    type="number"
                    value={formData.tenth.subjects.subject4.marks}
                    onChange={(e) => handleNestedFormDataChange("tenth", "subjects", "subject4.marks", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="tenth-subject5-name">Subject 5 Name</Label>
                  <Input
                    id="tenth-subject5-name"
                    name="entry.tenth.subject5.name"
                    placeholder="Enter subject name"
                    value={formData.tenth.subjects.subject5.name}
                    onChange={(e) => handleNestedFormDataChange("tenth", "subjects", "subject5.name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tenth-subject5-marks">Subject 5 Marks</Label>
                  <Input
                    id="tenth-subject5-marks"
                    name="entry.tenth.subject5.marks"
                    placeholder="Enter marks"
                    type="number"
                    value={formData.tenth.subjects.subject5.marks}
                    onChange={(e) => handleNestedFormDataChange("tenth", "subjects", "subject5.marks", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="tenth-subject6-name">Subject 6 Name</Label>
                  <Input
                    id="tenth-subject6-name"
                    name="entry.tenth.subject6.name"
                    placeholder="Enter subject name"
                    value={formData.tenth.subjects.subject6.name}
                    onChange={(e) => handleNestedFormDataChange("tenth", "subjects", "subject6.name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tenth-subject6-marks">Subject 6 Marks</Label>
                  <Input
                    id="tenth-subject6-marks"
                    name="entry.tenth.subject6.marks"
                    placeholder="Enter marks"
                    type="number"
                    value={formData.tenth.subjects.subject6.marks}
                    onChange={(e) => handleNestedFormDataChange("tenth", "subjects", "subject6.marks", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="tenth-total-marks">Total Marks Obtained *</Label>
                <Input
                  id="tenth-total-marks"
                  type="number"
                  name="entry.439970042"
                  placeholder="Total marks obtained"
                  value={formData.tenth.totalMarksObtained}
                  onChange={(e) => handleFormDataChange("tenth", "totalMarksObtained", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tenth-max-marks">Maximum Marks *</Label>
                <Input
                  id="tenth-max-marks"
                  type="number"
                  name="entry.2085777975"
                  placeholder="Maximum possible marks"
                  value={formData.tenth.maximumMarks}
                  onChange={(e) => handleFormDataChange("tenth", "maximumMarks", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tenth-percentage">Percentage *</Label>
                <Input
                  id="tenth-percentage"
                  type="number"
                  name="entry.107588766"
                  placeholder="Percentage"
                  step="0.01"
                  value={formData.tenth.percentage}
                  onChange={(e) => handleFormDataChange("tenth", "percentage", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <Label htmlFor="tenth-marksheet">Class X Marksheet Link *</Label>
              <Input
                id="tenth-marksheet"
                name="entry.159506664"
                placeholder="Drive link (set access to 'anyone with the link')"
                value={formData.tenth.marksheetLink}
                onChange={(e) => handleFormDataChange("tenth", "marksheetLink", e.target.value)}
                required
              />
            </div>
          </div>

          <Separator />

          {/* 12th Class Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Class XII (Senior Secondary) Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="twelfth-board">Board *</Label>
                <Input
                  id="twelfth-board"
                  name="entry.88600115"
                  placeholder="CBSE/ICSE/State Board"
                  value={formData.twelfth.board}
                  onChange={(e) => handleFormDataChange("twelfth", "board", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twelfth-roll">Roll Number *</Label>
                <Input
                  id="twelfth-roll"
                  name="entry.1553310916"
                  placeholder="Enter roll number"
                  value={formData.twelfth.rollNumber}
                  onChange={(e) => handleFormDataChange("twelfth", "rollNumber", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twelfth-year">Year of Passing *</Label>
                <Input
                  id="twelfth-year"
                  type="number"
                  name="entry.57145631"
                  placeholder="YYYY"
                  min="2000"
                  max="2023"
                  value={formData.twelfth.yearOfPassing}
                  onChange={(e) => handleFormDataChange("twelfth", "yearOfPassing", e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Subject details for 12th */}
            <div className="space-y-4 mb-4">
              <h4 className="font-medium">Subject Details</h4>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="twelfth-subject1-name">Subject 1 Name</Label>
                  <Input
                    id="twelfth-subject1-name"
                    name="entry.twelfth.subject1.name"
                    placeholder="Enter subject name"
                    value={formData.twelfth.subjects.subject1.name}
                    onChange={(e) => handleNestedFormDataChange("twelfth", "subjects", "subject1.name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twelfth-subject1-marks">Subject 1 Marks</Label>
                  <Input
                    id="twelfth-subject1-marks"
                    name="entry.twelfth.subject1.marks"
                    placeholder="Enter marks"
                    type="number"
                    value={formData.twelfth.subjects.subject1.marks}
                    onChange={(e) => handleNestedFormDataChange("twelfth", "subjects", "subject1.marks", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="twelfth-subject2-name">Subject 2 Name</Label>
                  <Input
                    id="twelfth-subject2-name"
                    name="entry.twelfth.subject2.name"
                    placeholder="Enter subject name"
                    value={formData.twelfth.subjects.subject2.name}
                    onChange={(e) => handleNestedFormDataChange("twelfth", "subjects", "subject2.name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twelfth-subject2-marks">Subject 2 Marks</Label>
                  <Input
                    id="twelfth-subject2-marks"
                    name="entry.twelfth.subject2.marks"
                    placeholder="Enter marks"
                    type="number"
                    value={formData.twelfth.subjects.subject2.marks}
                    onChange={(e) => handleNestedFormDataChange("twelfth", "subjects", "subject2.marks", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="twelfth-subject3-name">Subject 3 Name</Label>
                  <Input
                    id="twelfth-subject3-name"
                    name="entry.twelfth.subject3.name"
                    placeholder="Enter subject name"
                    value={formData.twelfth.subjects.subject3.name}
                    onChange={(e) => handleNestedFormDataChange("twelfth", "subjects", "subject3.name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twelfth-subject3-marks">Subject 3 Marks</Label>
                  <Input
                    id="twelfth-subject3-marks"
                    name="entry.twelfth.subject3.marks"
                    placeholder="Enter marks"
                    type="number"
                    value={formData.twelfth.subjects.subject3.marks}
                    onChange={(e) => handleNestedFormDataChange("twelfth", "subjects", "subject3.marks", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="twelfth-subject4-name">Subject 4 Name</Label>
                  <Input
                    id="twelfth-subject4-name"
                    name="entry.twelfth.subject4.name"
                    placeholder="Enter subject name"
                    value={formData.twelfth.subjects.subject4.name}
                    onChange={(e) => handleNestedFormDataChange("twelfth", "subjects", "subject4.name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twelfth-subject4-marks">Subject 4 Marks</Label>
                  <Input
                    id="twelfth-subject4-marks"
                    name="entry.twelfth.subject4.marks"
                    placeholder="Enter marks"
                    type="number"
                    value={formData.twelfth.subjects.subject4.marks}
                    onChange={(e) => handleNestedFormDataChange("twelfth", "subjects", "subject4.marks", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="twelfth-subject5-name">Subject 5 Name</Label>
                  <Input
                    id="twelfth-subject5-name"
                    name="entry.twelfth.subject5.name"
                    placeholder="Enter subject name"
                    value={formData.twelfth.subjects.subject5.name}
                    onChange={(e) => handleNestedFormDataChange("twelfth", "subjects", "subject5.name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twelfth-subject5-marks">Subject 5 Marks</Label>
                  <Input
                    id="twelfth-subject5-marks"
                    name="entry.twelfth.subject5.marks"
                    placeholder="Enter marks"
                    type="number"
                    value={formData.twelfth.subjects.subject5.marks}
                    onChange={(e) => handleNestedFormDataChange("twelfth", "subjects", "subject5.marks", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="twelfth-subject6-name">Subject 6 Name</Label>
                  <Input
                    id="twelfth-subject6-name"
                    name="entry.twelfth.subject6.name"
                    placeholder="Enter subject name"
                    value={formData.twelfth.subjects.subject6.name}
                    onChange={(e) => handleNestedFormDataChange("twelfth", "subjects", "subject6.name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twelfth-subject6-marks">Subject 6 Marks</Label>
                  <Input
                    id="twelfth-subject6-marks"
                    name="entry.twelfth.subject6.marks"
                    placeholder="Enter marks"
                    type="number"
                    value={formData.twelfth.subjects.subject6.marks}
                    onChange={(e) => handleNestedFormDataChange("twelfth", "subjects", "subject6.marks", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="twelfth-pcm">PCM Marks (Physics, Chemistry, Mathematics)</Label>
                <Input
                  id="twelfth-pcm"
                  type="number"
                  name="entry.pcm.marks"
                  placeholder="Total PCM marks"
                  value={formData.twelfth.pcmMarks}
                  onChange={(e) => handleFormDataChange("twelfth", "pcmMarks", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twelfth-pcm-percentage">PCM Percentage</Label>
                <Input
                  id="twelfth-pcm-percentage"
                  type="number"
                  name="entry.pcm.percentage"
                  placeholder="PCM Percentage"
                  step="0.01"
                  value={formData.twelfth.pcmPercentage}
                  onChange={(e) => handleFormDataChange("twelfth", "pcmPercentage", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="twelfth-total-marks">Total Marks Obtained *</Label>
                <Input
                  id="twelfth-total-marks"
                  type="number"
                  name="entry.1875921804"
                  placeholder="Total marks obtained"
                  value={formData.twelfth.totalMarksObtained}
                  onChange={(e) => handleFormDataChange("twelfth", "totalMarksObtained", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twelfth-max-marks">Maximum Possible Marks *</Label>
                <Input
                  id="twelfth-max-marks"
                  type="number"
                  name="entry.622353010"
                  placeholder="Maximum possible marks"
                  value={formData.twelfth.maximumMarks}
                  onChange={(e) => handleFormDataChange("twelfth", "maximumMarks", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twelfth-percentage">Percentage *</Label>
                <Input
                  id="twelfth-percentage"
                  type="number"
                  name="entry.8679183"
                  placeholder="Percentage"
                  step="0.01"
                  value={formData.twelfth.percentage}
                  onChange={(e) => handleFormDataChange("twelfth", "percentage", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <Label htmlFor="twelfth-marksheet">Class XII Marksheet Link ( Provide both side image in pdf ) *</Label>
              <Input
                id="twelfth-marksheet"
                name="entry.736058055"
                placeholder="Drive link (set access to 'anyone with the link')"
                value={formData.twelfth.marksheetLink}
                onChange={(e) => handleFormDataChange("twelfth", "marksheetLink", e.target.value)}
                required
              />
            </div>
          </div>

          <Separator />

          {/* Diploma Details (for Lateral Entry) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Diploma / B.Sc. Degree Details (For Lateral Entry Candidates)</h3>
            <p className="text-sm text-gray-500 mb-4">
              *To be filled by Applicants of B.Tech(Lateral Entry) programme
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="diploma-university">University/Institute</Label>
                <Input
                  id="diploma-university"
                  name="entry.2065808444"
                  placeholder="University/Institute name"
                  value={formData.diploma.university}
                  onChange={(e) => handleFormDataChange("diploma", "university", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="diploma-roll">Roll Number/Registration No.</Label>
                <Input
                  id="diploma-roll"
                  name="entry.1921513104"
                  placeholder="Enter roll number"
                  value={formData.diploma.rollNumber}
                  onChange={(e) => handleFormDataChange("diploma", "rollNumber", e.target.value)}
                />
              </div>
            </div>

            {/* First Year */}
            <div className="p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-3">First Year</h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="first-year-passing">Year of Passing</Label>
                  <Input
                    id="first-year-passing"
                    name="entry.diploma.first.year"
                    placeholder="Enter year"
                    type="number"
                    value={formData.diploma.firstYear.yearOfPassing}
                    onChange={(e) => handleNestedFormDataChange("diploma", "firstYear", "yearOfPassing", e.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="first-year-subjects">All Subjects Taken (separated by commas)</Label>
                  <Textarea
                    id="first-year-subjects"
                    name="entry.diploma.first.subjects"
                    placeholder="Enter subjects"
                    value={formData.diploma.firstYear.subjects}
                    onChange={(e) => handleNestedFormDataChange("diploma", "firstYear", "subjects", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="first-year-max">Maximum Marks</Label>
                  <Input
                    id="first-year-max"
                    name="entry.diploma.first.max"
                    placeholder="Enter maximum marks"
                    type="number"
                    value={formData.diploma.firstYear.maximumMarks}
                    onChange={(e) => handleNestedFormDataChange("diploma", "firstYear", "maximumMarks", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="first-year-obtained">Marks Obtained</Label>
                  <Input
                    id="first-year-obtained"
                    name="entry.diploma.first.obtained"
                    placeholder="Enter marks obtained"
                    type="number"
                    value={formData.diploma.firstYear.marksObtained}
                    onChange={(e) => handleNestedFormDataChange("diploma", "firstYear", "marksObtained", e.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="first-year-percentage">Percentage of marks obtained out of Total marks</Label>
                  <Input
                    id="first-year-percentage"
                    name="entry.diploma.first.percentage"
                    placeholder="Enter percentage"
                    type="number"
                    value={formData.diploma.firstYear.percentage}
                    onChange={(e) => handleNestedFormDataChange("diploma", "firstYear", "percentage", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Second Year */}
            <div className="p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-3">Second Year</h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="second-year-subjects">All Subjects Taken (separated by commas)</Label>
                  <Textarea
                    id="second-year-subjects"
                    name="entry.diploma.second.subjects"
                    placeholder="Enter subjects"
                    value={formData.diploma.secondYear.subjects}
                    onChange={(e) => handleNestedFormDataChange("diploma", "secondYear", "subjects", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="second-year-max">Maximum Marks</Label>
                  <Input
                    id="second-year-max"
                    name="entry.diploma.second.max"
                    placeholder="Enter maximum marks"
                    type="number"
                    value={formData.diploma.secondYear.maximumMarks}
                    onChange={(e) => handleNestedFormDataChange("diploma", "secondYear", "maximumMarks", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="second-year-obtained">Marks Obtained</Label>
                  <Input
                    id="second-year-obtained"
                    name="entry.diploma.second.obtained"
                    placeholder="Enter marks obtained"
                    type="number"
                    value={formData.diploma.secondYear.marksObtained}
                    onChange={(e) => handleNestedFormDataChange("diploma", "secondYear", "marksObtained", e.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="second-year-percentage">Percentage of marks obtained out of Total marks</Label>
                  <Input
                    id="second-year-percentage"
                    name="entry.diploma.second.percentage"
                    placeholder="Enter percentage"
                    type="number"
                    value={formData.diploma.secondYear.percentage}
                    onChange={(e) => handleNestedFormDataChange("diploma", "secondYear", "percentage", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Third Year */}
            <div className="p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-3">Third Year</h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="third-year-subjects">All Subjects Taken (separated by commas)</Label>
                  <Textarea
                    id="third-year-subjects"
                    name="entry.diploma.third.subjects"
                    placeholder="Enter subjects"
                    value={formData.diploma.thirdYear.subjects}
                    onChange={(e) => handleNestedFormDataChange("diploma", "thirdYear", "subjects", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="third-year-max">Maximum Marks</Label>
                  <Input
                    id="third-year-max"
                    name="entry.diploma.third.max"
                    placeholder="Enter maximum marks"
                    type="number"
                    value={formData.diploma.thirdYear.maximumMarks}
                    onChange={(e) => handleNestedFormDataChange("diploma", "thirdYear", "maximumMarks", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="third-year-obtained">Marks Obtained</Label>
                  <Input
                    id="third-year-obtained"
                    name="entry.diploma.third.obtained"
                    placeholder="Enter marks obtained"
                    type="number"
                    value={formData.diploma.thirdYear.marksObtained}
                    onChange={(e) => handleNestedFormDataChange("diploma", "thirdYear", "marksObtained", e.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="third-year-percentage">Percentage of marks obtained out of Total marks</Label>
                  <Input
                    id="third-year-percentage"
                    name="entry.diploma.third.percentage"
                    placeholder="Enter percentage"
                    type="number"
                    value={formData.diploma.thirdYear.percentage}
                    onChange={(e) => handleNestedFormDataChange("diploma", "thirdYear", "percentage", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <Label htmlFor="diploma-marksheet">Diploma / B.Sc. Degree marksheets of all semesters examination and passing certificate</Label>
              <Input
                id="diploma-marksheet"
                name="entry.1380047415"
                placeholder="Drive link (set access to 'anyone with the link')"
                value={formData.diploma.marksheetLink}
                onChange={(e) => handleFormDataChange("diploma", "marksheetLink", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={prevTab} className="flex items-center gap-2 cursor-pointer">
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
          <Button type="button" onClick={nextTab} className="flex items-center gap-2 cursor-pointer">
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default EducationDetails;