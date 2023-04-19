export default function quardrail(mathFunction) {
  try {
    return [mathFunction(), 'Guardrail was processed'];
  } catch (error) {
    return [`Error: ${error.message}`, 'Guardrail was processed'];
  }
}
