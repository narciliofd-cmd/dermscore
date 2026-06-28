"use client";

import AreaSelector from "./AreaSelector";
import SeveritySelector from "./SeveritySelector";

type Option = {
  label: string;
  value: number;
};

type Props = {
  title: string;
  severityOptions: Option[];

  values: {
    area: number;
    erythema: number;
    thickness: number;
    scaling: number;
  };

  onChange: (
    field: "area" | "erythema" | "thickness" | "scaling",
    value: number
  ) => void;
};

export default function PASIRegionCard({
  title,
  severityOptions,
  values,
  onChange,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-8">
        {title}
      </h2>

      <div className="space-y-8">

        <AreaSelector
          value={values.area}
          onChange={(value) => onChange("area", value)}
        />

        <SeveritySelector
          title="Eritema"
          value={values.erythema}
          options={severityOptions}
          onChange={(value) => onChange("erythema", value)}
        />

        <SeveritySelector
          title="Espessura"
          value={values.thickness}
          options={severityOptions}
          onChange={(value) => onChange("thickness", value)}
        />

        <SeveritySelector
          title="Descamação"
          value={values.scaling}
          options={severityOptions}
          onChange={(value) => onChange("scaling", value)}
        />

      </div>
    </div>
  );
}