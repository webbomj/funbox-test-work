export interface FoodItemBottomProps {
  isSelected: boolean;
  isBlocked: boolean;
  taste: string;
  description: string;
  click: (e: any) => void;
}
