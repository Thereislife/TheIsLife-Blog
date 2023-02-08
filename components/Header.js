import Link from 'next/link';
import TextLogo from './TextLogo';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Link href="/">
      <TextLogo/>
      </Link>
    </header>
  );
}
