import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import { Button } from '../ui/button';

function AddressForm() {
  const [formData, setFormData] = React.useState({
    ClientName: '',
    Wallet: '',
    Address1: '',
    Address2: '',
    PinOrZip: '',
    Country: '',
    Note: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/address-book`, formData);
    } catch (error) {
      console.error('Error submitting invoice:', error);
    }
  };

  return (
    <div className="flex items-center min-w-3/4">
      <form>
        <Label htmlFor="ClientName">Client Name</Label>
        <Input placeholder="Client Name" className="w-48" name="ClientName" value={formData.ClientName} onChange={handleInputChange} />

        <Label htmlFor="Wallet">Wallet</Label>
        <Input placeholder="0x..." className="w-48" name="Wallet" value={formData.Wallet} onChange={handleInputChange} />

        <Label htmlFor="Address1">Address Line 1</Label>
        <Input placeholder="Address Line" className="w-48" name="Address1" value={formData.Address1} onChange={handleInputChange} />

        <Label htmlFor="Address2">Address Line 2</Label>
        <Input placeholder="Address Line" className="w-48" name="Address2" value={formData.Address2} onChange={handleInputChange} />

        <Label htmlFor="PinOrZip">Pin Or Zip</Label>
        <Input placeholder="Pin Or Zip" className="w-48" name="PinOrZip" value={formData.PinOrZip} onChange={handleInputChange} />

        <Label htmlFor="Country">Country</Label>
        <Input placeholder="Country" className="w-48" name="Country" value={formData.Country} onChange={handleInputChange} />

        <Label htmlFor="Note">Note</Label>
        <Textarea name="Note" value={formData.Note} onChange={handleInputChange} />
        <Button type="submit" onClick={(event: any) => { handleSubmit(event); }}>Add Bill To Address</Button>
      </form>
    </div>
  );
}

export default AddressForm;
