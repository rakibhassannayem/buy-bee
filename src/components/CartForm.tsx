import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const CartForm = () => {
  return (
    <div className="flex-1 flex flex-col justify-between gap-5">
      <h1 className="text-4xl mb-5">Shipping info form</h1>

      <div className="flex items-center gap-6">
        <Field>
          <FieldLabel className="text-muted-foreground font-normal">
            First Name*
          </FieldLabel>
          <Input type="text" className="h-12 border-black rounded" />
        </Field>

        <Field>
          <FieldLabel className="text-muted-foreground font-normal">
            Last Name*
          </FieldLabel>
          <Input type="text" className="h-12 border-black rounded" />
        </Field>
      </div>

      <Field>
        <FieldLabel className="text-muted-foreground font-normal">
          Town/City*
        </FieldLabel>
        <Input type="text" className="h-12 border-black rounded" />
      </Field>

      <Field>
        <FieldLabel className="text-muted-foreground font-normal">
          Street Address*
        </FieldLabel>
        <Input type="text" className="h-12 border-black rounded" />
      </Field>

      <Field>
        <FieldLabel className="text-muted-foreground font-normal">
          Apartment, floor, etc. (optional)
        </FieldLabel>
        <Input type="text" className="h-12 border-black rounded" />
      </Field>

      <div className="flex items-center gap-6">
        <Field>
          <FieldLabel className="text-muted-foreground font-normal">
            Phone Number*
          </FieldLabel>
          <Input type="text" className="h-12 border-black rounded" />
        </Field>

        <Field>
          <FieldLabel className="text-muted-foreground font-normal">
            Email Address*
          </FieldLabel>
          <Input type="text" className="h-12 border-black rounded" />
        </Field>
      </div>

      <Field>
        <FieldLabel className="text-muted-foreground font-normal">
          Order Summary (optional)
        </FieldLabel>
        <Input type="text" className="h-12 border-black rounded" />
      </Field>
    </div>
  );
};

export default CartForm;
