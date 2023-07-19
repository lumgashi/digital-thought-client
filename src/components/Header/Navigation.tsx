import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';

import Link from '@/components/CustomLink';
import { useColorMode } from '@/providers/ColorModeProvider';
import { navigationItems } from '@/utils/navigation';

type NavLinkProps = {
  active?: boolean;
  darkMode?: boolean;
};

const NavLink = styled(Link)<NavLinkProps>(({ active, darkMode }) => [
  tw`inline-block relative`,
  tw`after:(absolute content block w-2/5 h-0.5 left-1/2 transform -translate-x-1/2 scale-x-0 transition-transform)`,
  !active && tw`hover:after:scale-x-100`,
  active && tw`after:(scale-x-100)`,
  !darkMode && tw`text-gray-500 after:(bg-gray-500)`,
  darkMode && tw`text-white/80 after:(bg-white/80)`,
]);

export default function Navigation() {
  const router = useRouter();

  const { colorMode } = useColorMode();

  return (
    <nav tw="text-white uppercase text-opacity-0 font-bold text-base ml-0 lg:(ml-4 mt-0) space-x-3">
      {navigationItems.map((item) => (
        <NavLink
          key={item.id}
          href={item.href}
          active={router.pathname === item.href}
          darkMode={colorMode === 'dark'}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}
