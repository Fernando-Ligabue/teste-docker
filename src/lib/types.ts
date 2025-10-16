// navigations menus types
export type SubItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  subItems?: SubItem[];
};

export type FooterInstitutionalGroup = {
  label: string;
  subItems: {
    label: string;
    href: string;
  }[];
};

export type FooterContact = {
  label: string;
  value: string;
};

export type Policy = {
  label: string;
  href: string;
};

export type Social = {
  label: string;
  href: string;
  icon: "FaFacebookF" | "FaInstagram" | "FaLinkedinIn";
};
// **********************************************************************

// properties types
export interface Property {
  id: number;
  type: string;
  cod: string;
  title: string;
  address: string;
  location: string;
  price: string;
  imageUrl: string;
  lat: number;
  lng: number;
  coordinates: [number, number];
}
export interface PropertyArrendamento {
  id: number;
  type: string;
  segment: string;
  title: string;
  address: string;
  location: string;
  lat: number;
  lng: number;
  bathrooms: number;
  tipology: string;
  floor: string;
  squareMeters: number;
  ernergetic: string;
  publish: string;
  monthlyRent: string;
  images: string[];
}
// ************************************************************************
// acordos types
export interface Entidade {
  id: number;
  entidade: string;
  location: string;
  benefits: string;
  websiteUrl: string;
  coordinates: string;
  email: string;
  pdfDocument?: string;
  imageUrl?: string;
}

export type AcordoContent = {
  label: string;
  heading: string;
  descriptionText: string;
  logo: string;
  background: string;
  entidades?: Entidade[];
};

export type AccordContentPages = {
  [key: string]: AcordoContent;
};

export type AcordosPageContent = {
  content: any[];
  sectionCPME: any[];
  infoCard: any[];
  infoSection: any[];
  accords: {
    id: number;
    imageUrl: string;
    title: string;
    size: string;
    link: string;
  }[];
  contentPages: AccordContentPages;
};

// ************************************************************************
// seguros types
export type InsuranceContent = {
  label: string;
  heading: string;
  descriptionText: string;
  logo: string;
  background: string;
};

export type InsurancePageContent = {
  content: Array<{
    heroContent: Array<InsuranceContent>;
  }>;
  sectionCPME: Array<{
    heading: string;
    descriptionText: string;
    image: string;
  }>;
  infoCard: Array<{
    id: number;
    icon: string;
    title: string;
  }>;
  insurances: Array<{
    id: number;
    imageUrl: string;
    title: string;
    size: string;
    link: string;
  }>;
  contentPages: Record<
    string,
    {
      label: string;
      heading: string;
      descriptionText: string;
      background: string;
      sectionDescript: {
        title: string;
        description: string;
        description2?: string;
        imageUrl: string;
      };
      sectionCards: {
        card1?: {
          id: number;
          title: string;
          description: string;
          description2?: string;
          image: string;
        };
        card2?: {
          id: number;
          title: string;
          description: string;
          description2?: string;
          image: string;
        };
        card3?: {
          id: number;
          title: string;
          description: string;
          description2?: string;
          image: string;
        };
      };
      sectionData: {
        icon: string;
        title: string;
        linkSubscricao: string;
        linkRegulamento: string;
      };
    }
  >;
};

// ************************************************************************
// emprestimos types
export type EmprestimosPageContent = {
  label: string;
  heading: string;
  descriptionText: string;
  background: string;
  sectionDescript: {
    title: string;
    description: string;
    description2?: string;
    imageUrl: string;
  };
  sectionCards: {
    card1?: { title: string; description: string };
    card2?: { title: string; description: string };
    card3?: { title: string; description: string };
  };
  sectionData: {
    icon: string;
    title: string;
    textRegulamento: string;
    linkPdf: string;
  };
};

export type EmprestimosPageContentData = {
  content: {
    heroContent: Array<{
      label: string;
      heading: string;
      descriptionText: string;
      logo: string;
      background: string;
    }>;
  }[];
  sectionCPME: Array<{
    heading: string;
    descriptionText: string;
    image: string;
  }>;
  infoText: Array<{
    id: number;
    icon: string;
    title: string;
  }>;
  cardEmprestimos: {
    emprestimosApoioFamilia: Array<{
      id: number;
      imageUrl: string;
      title: string;
      link: string;
    }>;
    creditoHabitacao: Array<{
      id: number;
      imageUrl: string;
      title: string;
      link: string;
    }>;
    reservasMatematicas: Array<{
      id: number;
      imageUrl: string;
      title: string;
      link: string;
    }>;
  };
  contentPages: Record<string, EmprestimosPageContent>;
};

// ************************************************************************
// formularios types
export interface Formularios {
  id: number;
  model: string;
  title: string;
  date?: Date;
  pdfDocument?: string;
}

// ************************************************************************
// noticias types

export type NewsSlug = string | number | symbol;
export interface NewsData {
  id: number;
  slug: string;
  date: string;
  banner: string;
  title: string;
  excerpt: string;
  subject: string;
}

export interface ContentNoticia {
  label: string;
  heading: string;
  descriptionText: string;
  background: string;
  content: {
    id: number;
    slug: string;
    date: string;
    banner: string;
    title: string;
    excerpt: string;
    content: string[];
    subject: string;
    images?: string[];
  }[];
}

export interface NewsPageContent {
  content: Array<{
    heroContent: Array<{
      label: string;
      heading: string;
      background: string;
    }>;
  }>;
  contentNoticia: Record<NewsSlug, ContentNoticia>;
}

// ************************************************************************
// policies types
export interface PrivacyPolicySection {
  section: string;
  description?: string[];
  titleList?: string;
  list?: string[];
  titleList2?: string;
  list2?: string[];
  endSection?: string | string[];
}

export interface PrivacyPolicyContent {
  policies: PrivacyPolicySection[];
}
