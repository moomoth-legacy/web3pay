import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';

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
      const result = await axios.post(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/address-book`, formData);
      console.log(result.data);
    } catch (error) {
      console.error('Error submitting invoice:', error);
    }
  };

  return (
    <div className="flex items-center ml-16 min-w-3/4">
      <form>
        <Label htmlFor="ClientName" className="mt-8 mb-4">Client Name</Label>
        <Input placeholder="Client Name" className="mt-2 mb-2 w-[600px]" name="ClientName" value={formData.ClientName} onChange={handleInputChange} />

        <div className="">
          <Label className="mt-8 mb-4" htmlFor="network">network</Label>
          <Select name="network">
            <SelectTrigger className="w-[600px]">
              <SelectValue placeholder="ETH" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eth">ETH</SelectItem>
              <SelectItem value="polygon">Polygon</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Label htmlFor="Wallet" className="mt-8 mb-4">Wallet</Label>
        <Input placeholder="0x..." className="mt-2 mb-2 w-[600px]" name="Wallet" value={formData.Wallet} onChange={handleInputChange} />

        <Label htmlFor="Address1" className="mt-8 mb-4">Address Line 1</Label>
        <Input placeholder="Address Line" className="mt-2 mb-2 w-[600px]" name="Address1" value={formData.Address1} onChange={handleInputChange} />

        <Label htmlFor="Address2" className="mt-8 mb-4">Address Line 2</Label>
        <Input placeholder="Address Line" className="mt-2 mb-2 w-[600px]" name="Address2" value={formData.Address2} onChange={handleInputChange} />

        <Label htmlFor="PinOrZip" className="mt-8 mb-4">Pin Or Zip</Label>
        <Input placeholder="Pin Or Zip" className="mt-2 mb-2 w-[600px]" name="PinOrZip" value={formData.PinOrZip} onChange={handleInputChange} />

        <Label htmlFor="Country" className="mt-8 mb-4">Country</Label>
        <Input placeholder="Country" className="mt-2 mb-2 w-[600px]" name="Country" value={formData.Country} onChange={handleInputChange} />

        <Label htmlFor="Note" className="mt-8 mb-4">Note</Label>
        <Textarea name="Note" value={formData.Note} onChange={handleInputChange} />
        <div className="flex items-center mt-8 mb-4">
          <Button className="mt-8 mb-4" type="submit" onClick={(event: any) => { handleSubmit(event); }}>Add Web3 Client</Button>
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
