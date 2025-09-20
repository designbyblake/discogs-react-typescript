import type { Route } from './+types/Release';
import { Heading } from '~/components/Heading/Heading';
export function meta({}: Route.MetaArgs) {
  return [{ title: 'Release' }, { name: 'description', content: '' }];
}

export default function Release() {
  return (
    <div>
      <Heading level='h1'>Release</Heading>
    </div>
  );
}
