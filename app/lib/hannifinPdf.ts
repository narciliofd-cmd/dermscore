import { jsPDF } from "jspdf";

type GeneratePDFProps = {
  patientName: string;
  date: string;
  selectedMajor: string[];
  selectedMinor: string[];
  majorCriteria: { id: string; text: string }[];
  minorCriteria: { id: string; text: string }[];
};

export function generateHannifinPDF({
  patientName,
  date,
  selectedMajor,
  selectedMinor,
  majorCriteria,
  minorCriteria,
}: GeneratePDFProps) {
  const doc = new jsPDF();

  let y = 20;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("DermScore", 20, y);

  y += 10;

  doc.setFontSize(14);
  doc.text("Critérios de Hanifin e Rajka", 20, y);

  y += 12;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);

  doc.text(`Paciente: ${patientName || "Não informado"}`, 20, y);
  y += 8;

  const formattedDate = new Date(date).toLocaleDateString("pt-BR");

doc.text(`Data: ${formattedDate}`, 20, y);

  y += 15;

  doc.setFont("helvetica", "bold");
  doc.text("CRITÉRIOS MAIORES", 20, y);

  y += 8;

  doc.setFont("helvetica", "normal");

  majorCriteria.forEach((criterion) => {
 const checked = selectedMajor.includes(criterion.id);

doc.rect(20, y - 4, 4, 4);

if (checked) {
  doc.line(21, y - 2, 22.2, y);
  doc.line(22.2, y, 24, y - 3);
}

doc.text(criterion.text, 27, y);

y += 8;
  });

  y += 8;

  doc.setFont("helvetica", "bold");
  doc.text("CRITÉRIOS MENORES", 20, y);

  y += 8;

  doc.setFont("helvetica", "normal");

minorCriteria.forEach((criterion) => {
  const checked = selectedMinor.includes(criterion.id);

  doc.rect(20, y - 4, 4, 4);

  if (checked) {
    doc.line(21, y - 2, 22.2, y);
    doc.line(22.2, y, 24, y - 3);
  }

  doc.text(criterion.text, 27, y);

  y += 8;

  if (y > 270) {
    doc.addPage();
    y = 20;
  }
});

  y += 10;

  doc.setFont("helvetica", "bold");

  doc.text(
    `Maiores: ${selectedMajor.length}/${majorCriteria.length}`,
    20,
    y
  );

  y += 8;

  doc.text(
    `Menores: ${selectedMinor.length}/${minorCriteria.length}`,
    20,
    y
  );

  y += 12;

  const diagnosis =
    selectedMajor.length >= 3 &&
    selectedMinor.length >= 3;

  doc.setFontSize(12);

  doc.text(
    diagnosis
      ? "Critérios diagnósticos preenchidos."
      : "Critérios diagnósticos NÃO preenchidos.",
    20,
    y
  );

  y += 20;

  doc.setFontSize(10);

  doc.text(
    "Gerado automaticamente pelo DermScore",
    20,
    y
  );

  y += 6;

  doc.text(
    "https://dermscore.com.br",
    20,
    y
  );

  doc.save(
    `Hanifin-Rajka-${patientName || "Paciente"}.pdf`
  );
}