import React from 'react';
import { Card, CardContent, CardTitle } from '../ui/card';

function Help() {
  return (
    <div className="flex items-center flex-col w-3/4">
      <Card className="m-8">
        <CardTitle className="m-8 text-lg">1</CardTitle>
        <CardContent>Add Your Client Name, Address and Wallet Address</CardContent>
      </Card>
      <Card className="m-8">
        <CardTitle className="m-8 text-lg">2</CardTitle>
        <CardContent>Create and Send Invoice Using USD or ETH Currency</CardContent>
      </Card>
      <Card className="m-8">
        <CardTitle className="m-8 text-lg">3</CardTitle>
        <CardContent>Send or Print Invoice with Link</CardContent>
      </Card>
    </div>
  );
}

export default Help;
