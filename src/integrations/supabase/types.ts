export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      case_studies: {
        Row: {
          challenge: string
          company: string
          created_at: string
          display_order: number
          id: string
          is_active: boolean
          quote: string | null
          solution: string
          updated_at: string
        }
        Insert: {
          challenge: string
          company: string
          created_at?: string
          display_order?: number
          id?: string
          is_active?: boolean
          quote?: string | null
          solution: string
          updated_at?: string
        }
        Update: {
          challenge?: string
          company?: string
          created_at?: string
          display_order?: number
          id?: string
          is_active?: boolean
          quote?: string | null
          solution?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_info: {
        Row: {
          address: string | null
          created_at: string
          email: string | null
          hubspot_form_id: string | null
          id: string
          is_active: boolean
          phone: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          created_at?: string
          email?: string | null
          hubspot_form_id?: string | null
          id?: string
          is_active?: boolean
          phone?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          created_at?: string
          email?: string | null
          hubspot_form_id?: string | null
          id?: string
          is_active?: boolean
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      downloads: {
        Row: {
          created_at: string
          cta_text: string
          description: string
          display_order: number
          download_link: string
          icon: string
          id: string
          is_active: boolean
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          cta_text: string
          description: string
          display_order?: number
          download_link: string
          icon: string
          id?: string
          is_active?: boolean
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          cta_text?: string
          description?: string
          display_order?: number
          download_link?: string
          icon?: string
          id?: string
          is_active?: boolean
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      faq_items: {
        Row: {
          answer: string
          created_at: string
          display_order: number
          id: string
          is_active: boolean
          question: string
          updated_at: string
        }
        Insert: {
          answer: string
          created_at?: string
          display_order?: number
          id?: string
          is_active?: boolean
          question: string
          updated_at?: string
        }
        Update: {
          answer?: string
          created_at?: string
          display_order?: number
          id?: string
          is_active?: boolean
          question?: string
          updated_at?: string
        }
        Relationships: []
      }
      features: {
        Row: {
          created_at: string
          description: string
          display_order: number
          icon: string
          id: string
          is_active: boolean
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          display_order?: number
          icon: string
          id?: string
          is_active?: boolean
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          display_order?: number
          icon?: string
          id?: string
          is_active?: boolean
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      footer_config: {
        Row: {
          company_description: string | null
          company_name: string
          copyright_text: string | null
          created_at: string
          id: string
          is_active: boolean
          services: Json | null
          updated_at: string
        }
        Insert: {
          company_description?: string | null
          company_name: string
          copyright_text?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          services?: Json | null
          updated_at?: string
        }
        Update: {
          company_description?: string | null
          company_name?: string
          copyright_text?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          services?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      hero_content: {
        Row: {
          created_at: string
          cta_button_link: string
          cta_button_text: string
          id: string
          is_active: boolean
          subtitle: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          cta_button_link: string
          cta_button_text: string
          id?: string
          is_active?: boolean
          subtitle: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          cta_button_link?: string
          cta_button_text?: string
          id?: string
          is_active?: boolean
          subtitle?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      methodology_phases: {
        Row: {
          activities: string
          created_at: string
          description: string
          display_order: number
          id: string
          is_active: boolean
          phase_number: string
          results: string
          title: string
          updated_at: string
        }
        Insert: {
          activities: string
          created_at?: string
          description: string
          display_order?: number
          id?: string
          is_active?: boolean
          phase_number: string
          results: string
          title: string
          updated_at?: string
        }
        Update: {
          activities?: string
          created_at?: string
          description?: string
          display_order?: number
          id?: string
          is_active?: boolean
          phase_number?: string
          results?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      navigation_config: {
        Row: {
          brand_name: string
          created_at: string
          cta_button_link: string | null
          cta_button_text: string | null
          id: string
          is_active: boolean
          nav_items: Json
          updated_at: string
        }
        Insert: {
          brand_name: string
          created_at?: string
          cta_button_link?: string | null
          cta_button_text?: string | null
          id?: string
          is_active?: boolean
          nav_items: Json
          updated_at?: string
        }
        Update: {
          brand_name?: string
          created_at?: string
          cta_button_link?: string | null
          cta_button_text?: string | null
          id?: string
          is_active?: boolean
          nav_items?: Json
          updated_at?: string
        }
        Relationships: []
      }
      packages: {
        Row: {
          created_at: string
          cta_link: string
          cta_text: string
          description: string
          display_order: number
          duration: string
          features: string
          id: string
          is_active: boolean
          package_name: string
          price: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          cta_link: string
          cta_text: string
          description: string
          display_order?: number
          duration: string
          features: string
          id?: string
          is_active?: boolean
          package_name: string
          price: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          cta_link?: string
          cta_text?: string
          description?: string
          display_order?: number
          duration?: string
          features?: string
          id?: string
          is_active?: boolean
          package_name?: string
          price?: string
          updated_at?: string
        }
        Relationships: []
      }
      painpoints: {
        Row: {
          created_at: string
          description: string
          display_order: number
          icon: string
          id: string
          is_active: boolean
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          display_order?: number
          icon: string
          id?: string
          is_active?: boolean
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          display_order?: number
          icon?: string
          id?: string
          is_active?: boolean
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          author_name: string
          author_position: string
          content: string
          created_at: string
          display_order: number
          id: string
          is_active: boolean
          rating: number
          updated_at: string
        }
        Insert: {
          author_name: string
          author_position: string
          content: string
          created_at?: string
          display_order?: number
          id?: string
          is_active?: boolean
          rating?: number
          updated_at?: string
        }
        Update: {
          author_name?: string
          author_position?: string
          content?: string
          created_at?: string
          display_order?: number
          id?: string
          is_active?: boolean
          rating?: number
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
