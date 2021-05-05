export default async function statesbr() {
  const states = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  return states.json();
}