import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

function InvoiceForm() {
  const [formData, setFormData] = React.useState({
    invoiceName: '',
    billTo: '',
    from: '',
    invoiceCurrency: '',
    wallet: 'YourWalletAddress', // Assuming this is a fixed value
    item: '',
    quantity: '',
    price: '',
    discount: '',
    tax: '',
    description: '',
    issueDate: null,
    dueDate: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (name, date) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: date,
    }));
  };

  // Placeholder options for the dropdown
  const currencyOptions = [
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' },
    { label: 'JPY', value: 'JPY' },
  ];

  return (
    <form>
      <Input name="invoiceName" value={formData.invoiceName} onChange={handleInputChange} />
      <Textarea name="billTo" value={formData.billTo} onChange={handleInputChange} />
      <Textarea name="from" value={formData.from} onChange={handleInputChange} />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      <Input name="wallet" value={formData.wallet} readOnly />
      <Input name="item" value={formData.item} onChange={handleInputChange} />
      <Input name="quantity" type="number" value={formData.quantity} onChange={handleInputChange} />
      <Input name="price" type="number" value={formData.price} onChange={handleInputChange} />
      <Input name="discount" type="number" value={formData.discount} onChange={handleInputChange} />
      <Input name="tax" type="number" value={formData.tax} onChange={handleInputChange} />
      <Textarea name="description" value={formData.description} onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InvoiceForm;
