export interface NavLink {
  label: string
  sectionId: string
}

export const navLinks: NavLink[] = [
  { label: 'About', sectionId: 'about' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Certificates', sectionId: 'certificates' },
  { label: 'Contact', sectionId: 'contact' },
]
