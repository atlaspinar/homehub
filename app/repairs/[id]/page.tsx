import RepairDetail from './RepairDetail';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
  ];
}

export default async function RepairPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <RepairDetail repairId={resolvedParams.id} />;
}