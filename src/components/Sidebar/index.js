import { HeaderSidebar } from './style';

export default function Sidebar() {
  return (
    <HeaderSidebar>
      <h5>
        <span>Dev</span>
        challenges.io
      </h5>
      <ul>
        <li>Colors</li>
        <li>Typography</li>
        <li>Spaces</li>
        <li>Buttons</li>
        <li className="active">Inputs</li>
        <li>Grid</li>
      </ul>
    </HeaderSidebar>
  );
}
