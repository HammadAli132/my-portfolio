import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSkills extends Struct.ComponentSchema {
  collectionName: 'components_shared_skills';
  info: {
    description: '';
    displayName: 'Skills';
  };
  attributes: {
    Name: Schema.Attribute.String;
  };
}

export interface SharedTechStack extends Struct.ComponentSchema {
  collectionName: 'components_shared_tech_stacks';
  info: {
    displayName: 'TechStack';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.skills': SharedSkills;
      'shared.tech-stack': SharedTechStack;
    }
  }
}
