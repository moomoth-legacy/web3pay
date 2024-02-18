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
import { Label } from '@/components/ui/label';

function InvoiceForm() {
  const [formData, setFormData] = React.useState({
    invoiceName: '',
    billTo: '',
    from: '',
    invoiceCurrency: '',
    wallet: '', // Assuming this is a fixed value
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

  // Placeholder options for the dropdown
  const currencyOptions = [
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' },
    { label: 'JPY', value: 'JPY' },
  ];

  return (
    <div className="flex items-center min-w-3/4">
      <form>
        <Label htmlFor="invoiceName">Your email address</Label>
        <Input placeholder="Invoice #1" className="w-48" name="invoiceName" value={formData.invoiceName} onChange={handleInputChange} />
        <Label htmlFor="billTo">Bill To</Label>
        <Textarea placeholder="Name & Address" name="billTo" value={formData.billTo} onChange={handleInputChange} />
        <Label htmlFor="from">From</Label>
        <Textarea name="from" placeholder="Name & Address" value={formData.from} onChange={handleInputChange} />
        <Label htmlFor="currency">Currency</Label>
        <Select name="currency">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="$Token" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="ETH">ETH</SelectItem>
            <SelectItem value="MATIC">MATIC</SelectItem>
          </SelectContent>
        </Select>
        <Label htmlFor="wallet">Wallet</Label>
        <Input name="wallet" placeholder="0x..." value={formData.wallet} readOnly />
        <Label htmlFor="item">Item</Label>
        <Input name="item" placeholder="Item" value={formData.item} onChange={handleInputChange} />
        <Label htmlFor="quantity">Quantity</Label>
        <Input name="quantity" placeholder="2" type="number" value={formData.quantity} onChange={handleInputChange} />
        <Label htmlFor="price">Price</Label>
        <Input name="price" type="number" value={formData.price} onChange={handleInputChange} />
        <Label htmlFor="discount">Discount</Label>
        <Input name="discount" type="number" value={formData.discount} onChange={handleInputChange} />
        <Label htmlFor="tax">Tax</Label>
        <Input name="tax" type="number" value={formData.tax} onChange={handleInputChange} />
        <Label htmlFor="description">Description</Label>
        <Textarea name="description" value={formData.description} onChange={handleInputChange} />
        <button type="submit">Create Web3 Invoice</button>
      </form>
    </div>
  );
}

export default InvoiceForm;
