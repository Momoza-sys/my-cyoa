import { MDXRemote } from 'next-mdx-remote/rsc';
import Choice from '@/components/Choice';

const components = { Choice };

export default async function StoryPage({ params }: { params: { id: string } }) {
  try {
    // Dynamically import the MDX file
    const mdxModule = await import(`@/content/story/${params.id}.mdx`);
    const MDXContent = mdxModule.default;

    return (
      <main className="prose max-w-2xl mx-auto p-4">
        <MDXContent components={components} />
      </main>
    );
  } catch (err) {
    return <div>Story not found</div>;
  }
}