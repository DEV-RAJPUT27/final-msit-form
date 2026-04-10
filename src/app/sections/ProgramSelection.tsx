/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface ProgramSelectionProps {
  formData: {
    firstYearProgram: string;
    secondYearProgram: string;
    programmeName: string;
    programmeCode: string;
    preferredShift: string;
    registrationNumber: string;
    registrationDate: string;
    rollNumber: string;
    rank: string;
  };
  handleFormDataChange: (field: string, value: any) => void;
  nextTab: () => void;
}

const ProgramSelection: React.FC<ProgramSelectionProps> = ({
  formData,
  handleFormDataChange,
  nextTab
}) => {
  const [firstYearSelections, setFirstYearSelections] = useState<string[]>([]);
  const [secondYearSelections, setSecondYearSelections] = useState<string[]>([]);

  useEffect(() => {
    if (formData.firstYearProgram) {
      setFirstYearSelections(formData.firstYearProgram.split(',').filter(Boolean));
    }
    if (formData.secondYearProgram) {
      setSecondYearSelections(formData.secondYearProgram.split(',').filter(Boolean));
    }
  }, [formData.firstYearProgram, formData.secondYearProgram]);

  const handleCheckboxToggle = (program: string, isFirstYear: boolean) => {
    if (isFirstYear) {
      const newSelections = firstYearSelections.includes(program)
        ? firstYearSelections.filter(p => p !== program)
        : [...firstYearSelections, program];

      setFirstYearSelections(newSelections);

      handleFormDataChange("firstYearProgram", newSelections.join(','));
    } else {
      const newSelections = secondYearSelections.includes(program)
        ? secondYearSelections.filter(p => p !== program)
        : [...secondYearSelections, program];

      setSecondYearSelections(newSelections);
      handleFormDataChange("secondYearProgram", newSelections.join(','));
    }
  };

  return (
    <TabsContent value="program" className="px-6 pb-6">
      <Card>
        <CardHeader>
          <CardTitle>Program Selection *</CardTitle>
          <CardDescription>
            Please select the program you wish to apply for under Management Quota ( Multiple Choices Allowed )
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">B.Tech [First Year] Prog. Code: 131</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="cse-1st"
                  name="firstYearProgram"
                  className="toggles"
                  checked={firstYearSelections.includes("CSE-1st Shift")}
                  disabled={secondYearSelections.length > 0}
                  onCheckedChange={() => handleCheckboxToggle("CSE-1st Shift", true)}
                />
                <Label htmlFor="cse-1st">CSE-1st Shift</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="cse-2nd"
                  name="firstYearProgram"
                  className="toggles"
                  checked={firstYearSelections.includes("CSE-2nd Shift")}
                  disabled={secondYearSelections.length > 0}
                  onCheckedChange={() => handleCheckboxToggle("CSE-2nd Shift", true)}
                />
                <Label htmlFor="cse-2nd">CSE-2nd Shift</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="it-1st"
                  name="firstYearProgram"
                  className="toggles"
                  checked={firstYearSelections.includes("IT-1st Shift")}
                  disabled={secondYearSelections.length > 0}
                  onCheckedChange={() => handleCheckboxToggle("IT-1st Shift", true)}
                />
                <Label htmlFor="it-1st">IT-1st Shift</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="it-2nd"
                  name="firstYearProgram"
                  className="toggles"
                  checked={firstYearSelections.includes("IT-2nd Shift")}
                  disabled={secondYearSelections.length > 0}
                  onCheckedChange={() => handleCheckboxToggle("IT-2nd Shift", true)}
                />
                <Label htmlFor="it-2nd">IT-2nd Shift</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="ece-1st"
                  name="firstYearProgram"
                  className="toggles"
                  checked={firstYearSelections.includes("ECE-1st Shift")}
                  disabled={secondYearSelections.length > 0}
                  onCheckedChange={() => handleCheckboxToggle("ECE-1st Shift", true)}
                />
                <Label htmlFor="ece-1st">ECE-1st Shift</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="ece-2nd"
                  name="firstYearProgram"
                  className="toggles"
                  checked={firstYearSelections.includes("ECE-2nd Shift")}
                  disabled={secondYearSelections.length > 0}
                  onCheckedChange={() => handleCheckboxToggle("ECE-2nd Shift", true)}
                />
                <Label htmlFor="ece-2nd">ECE-2nd Shift</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="eee-1st"
                  name="firstYearProgram"
                  className="toggles"
                  checked={firstYearSelections.includes("EEE-1st Shift")}
                  disabled={secondYearSelections.length > 0}
                  onCheckedChange={() => handleCheckboxToggle("EEE-1st Shift", true)}
                />
                <Label htmlFor="eee-1st">EEE-1st Shift</Label>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-4">LE to B.Tech [Second Year] Prog. Code: 128/129</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="le-cse-1st"
                  name="secondYearProgram"
                  className="toggles"
                  checked={secondYearSelections.includes("LE-CSE-1st Shift")}
                  disabled={firstYearSelections.length > 0}
                  onCheckedChange={() => handleCheckboxToggle("LE-CSE-1st Shift", false)}
                />
                <Label htmlFor="le-cse-1st">CSE-1st Shift</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="le-it-1st"
                  name="secondYearProgram"
                  className="toggles"
                  checked={secondYearSelections.includes("LE-IT-1st Shift")}
                  disabled={firstYearSelections.length > 0}
                  onCheckedChange={() => handleCheckboxToggle("LE-IT-1st Shift", false)}
                />
                <Label htmlFor="le-it-1st">IT-1st Shift</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="le-ece-1st"
                  name="secondYearProgram"
                  className="toggles"
                  checked={secondYearSelections.includes("LE-ECE-1st Shift")}
                  disabled={firstYearSelections.length > 0}
                  onCheckedChange={() => handleCheckboxToggle("LE-ECE-1st Shift", false)}
                />
                <Label htmlFor="le-ece-1st">ECE-1st Shift</Label>
              </div>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="programme-name">Programme Name *</Label>
                <Input
                  id="programme-name"
                  name="entry.1957259358"
                  placeholder="Enter programme name"
                  value={formData.programmeName}
                  onChange={(e) => handleFormDataChange("programmeName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="programme-code">Programme Code *</Label>
                <Input
                  id="programme-code"
                  name="entry.1927345069"
                  placeholder="Enter programme code"
                  value={formData.programmeCode}
                  onChange={(e) => handleFormDataChange("programmeCode", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="preferred-shift">Preferred Choice of Shift *</Label>
                <Input
                  id="preferred-shift"
                  name="entry.1356345820"
                  placeholder="Enter preferred shift"
                  value={formData.preferredShift}
                  onChange={(e) => handleFormDataChange("preferredShift", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="application-number">
                  GGSIPU Online Application Form (Registration No.) *
                </Label>
                <Input
                  id="application-number"
                  name="entry.405573426"
                  placeholder="Enter registration number"
                  value={formData.registrationNumber}
                  onChange={(e) => handleFormDataChange("registrationNumber", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="registration-date">Registration date *</Label>
              <Input
                id="registration-date"
                type="date"
                name="entry.1181297114"
                value={formData.registrationDate}
                onChange={(e) => handleFormDataChange("registrationDate", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="roll-number">NLT(JEE)/CET Roll No.(L.E.) *</Label>
              <Input
                id="roll-number"
                type="text"
                name="entry.1841836427"
                placeholder="Enter roll number"
                value={formData.rollNumber}
                onChange={(e) => handleFormDataChange("rollNumber", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="rank">NLT(JEE)/CET Rank (L.E.) *</Label>
            <Input
              id="rank"
              type="number"
              name="entry.739115388"
              placeholder="Enter rank"
              value={formData.rank}
              onChange={(e) => handleFormDataChange("rank", e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="button" onClick={nextTab} className="flex items-center gap-2 cursor-pointer">
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default ProgramSelection;