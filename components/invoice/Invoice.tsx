/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
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
import axios from 'axios';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon } from '@radix-ui/react-icons';
import cn from '@/lib/utils';
import { useAddress } from '@thirdweb-dev/react';

// Assuming your form data type looks like this
interface FormDataType {
  invoiceName: string;
  billTo: string;
  from: string;
  invoiceCurrency: string;
  wallet: string | undefined;
  item: string;
  quantity: number;
  price: number;
  discount: number;
  tax: number;
  total: number;
  note: string;
  issueDate: Date;
  dueDate: Date;
}

function InvoiceForm() {
  const address = useAddress();
  const [formData, setFormData] = React.useState<FormDataType>({
    invoiceName: '',
    billTo: '',
    from: '',
    invoiceCurrency: 'polygon',
    wallet: address, // Assuming this is a fixed value
    item: '',
    quantity: 0,
    price: 0,
    discount: 0,
    tax: 0,
    total: 0,
    note: '',
    issueDate: new Date(),
    dueDate: new Date(),
  });
  const [invoiceId, setInvoiceId] = React.useState('');
  const [billTo, setBillTo] = React.useState('');
  const [fromValue, setFormValue] = React.useState('');
  const calculateTotal = () => {
    const {
      quantity, price, discount, tax,
    } = formData;
    const totalPrice = quantity * price;
    const discountedPrice = totalPrice - (totalPrice * discount) / 100;
    const totalTax = (discountedPrice * tax) / 100;
    const total = discountedPrice + totalTax;
    return total; // Assuming you want to keep the total to two decimal places
  };
  const [clients, setClients] = React.useState([]);
  const [issueDate, setIssueDate] = React.useState(new Date());

  const handleIssueDate = (e: any) => {
    console.log(e);
    setIssueDate(e);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState: FormDataType) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formData.total = calculateTotal();
    formData.billTo = billTo;
    formData.wallet = address;
    formData.from = fromValue;
    console.log(formData);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/invoice`, formData);
      setInvoiceId(response.data.invoice._id);
      console.log(response.data.invoice);
    } catch (error) {
      console.error('Error submitting invoice:', error);
    }
  };

  const createShortenURL = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/create-shorten-url`, { invoiceId });
    } catch (error) {
      console.error('Error submitting invoice:', error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/address-book`);
        setClients(response.data.addresses);
      } catch (error) {
        console.error('Error submitting invoice:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex items-center ml-16 min-w-3/4">
      <form onSubmit={(event) => { handleSubmit(event); }}>
        <Label className="mt-8 mb-4" htmlFor="invoiceName">Invoice Name</Label>
        <Input placeholder="Invoice #1" className="w-[600px]" name="invoiceName" value={formData.invoiceName} onChange={handleInputChange} />
        <div className="flex flex-row mt-8 mb-4 space-x-8">
          <div className="flex flex-col w-full">
            <Label className="mb-4" htmlFor="billTo">Bill To</Label>
            <Select name="billTo" onValueChange={setBillTo} defaultValue={billTo}>
              <SelectTrigger className="w-full h-32">
                <SelectValue placeholder="Choose Client" />
              </SelectTrigger>
              <SelectContent>
                {
                  clients.map((value: any) => (
                    <SelectItem value={value._id}>
                      {`${value.ClientName} Contact`}
                    </SelectItem>
                  ))
                }
              </SelectContent>
            </Select>

            <Label className="mt-2 mb-4" htmlFor="wallet">Client Wallet</Label>
            <Input className="mt-2 mb-2" name="wallet" value={address} readOnly />
          </div>
          <div className="flex flex-col w-full">
            <Label className="mb-4" htmlFor="from">From</Label>
            <Select name="from" onValueChange={setFormValue} defaultValue={fromValue}>
              <SelectTrigger className="w-full h-32">
                <SelectValue placeholder="Choose Client" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="From Info">From Info</SelectItem>
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
        <div className="flex flex-col">
          <Label className="mt-8 mb-4" htmlFor="item">Item</Label>
          <Input className="mt-2 mb-2" name="item" placeholder="Item" value={formData.item} onChange={handleInputChange} />
        </div>
        <div className="flex flex-row mt-8 mb-4 space-x-8">
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
          <Input className="mt-2 mb-2" name="total" type="number" value={calculateTotal()} readOnly />
        </div>
        <div className="flex flex-col mt-32 mb-14">
          <Label className="mt-4 mb-4" htmlFor="Note">Note</Label>
          <Textarea className="mt-2 mb-2" name="note" value={formData.note} onChange={handleInputChange} />
        </div>
        <div className="flex flex-col mt-32 mb-14">
          <Label className="mt-4 mb-4" htmlFor="Note">Issue Date </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-[280px] justify-start text-left font-normal',
                  !issueDate && 'text-muted-foreground',
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {issueDate ? format(issueDate, 'PPP') : <span>Pick a Issue Date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={issueDate}
                onSelect={handleIssueDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center">
          <Button type="submit" variant="default" size="lg">Create Web3 Invoice</Button>
        </div>
      </form>
      <Button type="submit" variant="default" size="lg" onClick={(event) => { createShortenURL(event); }}>Create Shorten URL</Button>
    </div>
  );
}

export default InvoiceForm;
