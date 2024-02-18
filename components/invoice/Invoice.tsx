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
import { Button } from '../ui/button';

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
    Total: '',
    Note: '',
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
    <div className="flex items-center ml-16 min-w-3/4">
      <form>
        <Label className="mt-8 mb-4" htmlFor="invoiceName">Invoice Name</Label>
        <Input placeholder="Invoice #1" className="w-[600px]" name="invoiceName" value={formData.invoiceName} onChange={handleInputChange} />
        <div className="flex flex-row mt-8 mb-4 space-x-8">
          <div className="flex flex-col w-full">
            <Label className="mb-4" htmlFor="billTo">Bill To</Label>
            <Select name="billTo">
              <SelectTrigger className="w-full h-32">
                <SelectValue placeholder="Choose Client" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Client 1">Client 1 Contact</SelectItem>
                <SelectItem value="Client 2">Client 2 Contact</SelectItem>
                <SelectItem value="Client 3">Client 3 Contact</SelectItem>
              </SelectContent>
            </Select>

            <Label className="mt-2 mb-4" htmlFor="wallet">Client Wallet</Label>
            <Input className="mt-2 mb-2" name="wallet" placeholder="0x..." value={formData.wallet} readOnly />
          </div>
          <div className="flex flex-col w-full">
            <Label className="mb-4" htmlFor="from">From</Label>
            <Select name="from">
              <SelectTrigger className="w-full h-32">
                <SelectValue placeholder="Choose Client" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Client 1">From Info</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mb-8">
          <Label className="mt-8 mb-4" htmlFor="currency">Currency</Label>
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
        </div>

        <div className="flex flex-row mt-8 mb-4 space-x-8">
          <div className="flex flex-col">
            <Label className="mt-8 mb-4" htmlFor="item">Item</Label>
            <Input className="mt-2 mb-2" name="item" placeholder="Item" value={formData.item} onChange={handleInputChange} />
          </div>
          <div className="flex flex-col">
            <Label className="mt-8 mb-4" htmlFor="quantity">Quantity</Label>
            <Input className="mt-2 mb-2" name="quantity" placeholder="2" type="number" value={formData.quantity} onChange={handleInputChange} />
          </div>
          <div className="flex flex-col">
            <Label className="mt-8 mb-4" htmlFor="price">Price</Label>
            <Input className="mt-2 mb-2" name="price" type="number" value={formData.price} onChange={handleInputChange} />
          </div>
          <div className="flex flex-col">
            <Label className="mt-8 mb-4" htmlFor="discount">Discount</Label>
            <Input className="mt-2 mb-2" name="discount" type="number" value={formData.discount} onChange={handleInputChange} />
          </div>
          <div className="flex flex-col">
            <Label className="mt-8 mb-4" htmlFor="tax">Tax</Label>
            <Input className="mt-2 mb-2" name="tax" type="number" value={formData.tax} onChange={handleInputChange} />
          </div>
        </div>
        <div className="flex flex-col float-right">
          <Label className="mt-8 mb-4" htmlFor="Total">Total</Label>
          <Input className="mt-2 mb-2" name="Total" type="number" value={formData.Total} onChange={handleInputChange} />
        </div>
        <div className="flex flex-col mt-32 mb-14">
          <Label className="mt-4 mb-4" htmlFor="Note">Note</Label>
          <Textarea className="mt-2 mb-2" name="Note" value={formData.Note} onChange={handleInputChange} />
        </div>
        <div className="flex items-center">
          <Button type="submit" variant="default" size="lg">Create Web3 Invoice</Button>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;
