import RecipeDetail from './RecipeDetail';

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

export default async function RecipePage({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  return <RecipeDetail recipeId={resolvedParams.id} />;
}