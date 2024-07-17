import React, { useState } from 'react';
import { Modal, Button, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TextField, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import moment from 'moment';
import './BookingCalendar.css'; 

const BookingCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'John Doe',
      start: new Date(2024, 6, 10), 
      end: new Date(2024, 6, 10),
      totalPrice: '', 
      bill: null, 
      report: null, 
    },
  ]);


 
  const handleTotalPriceChange = (event, id) => {
    const { value } = event.target;
    const updatedEvents = events.map((event) =>
      event.id === id ? { ...event, totalPrice: value } : event
    );
    setEvents(updatedEvents);
  };

  const handleUploadBill = (event, id) => {
    const file = event.target.files[0];
    const updatedEvents = events.map((event) =>
      event.id === id ? { ...event, bill: file } : event
    );
    setEvents(updatedEvents);
  };

  const handleUploadReport = (event, id) => {
    const file = event.target.files[0];
    const updatedEvents = events.map((event) =>
      event.id === id ? { ...event, report: file } : event
    );
    setEvents(updatedEvents);
  };

  const handleRowSubmit = (id) => {
    const event = events.find(event => event.id === id);
    console.log(`Submit button clicked for event with ID ${id}`);
    console.log('Event details:', event);
    console.log('Total Price:', event.totalPrice);
    console.log('Bill:', event.bill); // Here you can handle saving or processing the data
    console.log('Report:', event.report);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="event table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell>Bill</TableCell>
              <TableCell>Report</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id} style={{ cursor: 'pointer' }}>
                <TableCell>{event.title}</TableCell>
                <TableCell>{moment(event.start).format('YYYY-MM-DD')}</TableCell>
                <TableCell>{moment(event.end).format('YYYY-MM-DD')}</TableCell>
                <TableCell>
                  <TextField
                    id={`total-price-${event.id}`}
                    value={event.totalPrice}
                    onChange={(e) => handleTotalPriceChange(e, event.id)}
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <input
                    accept="application/pdf,image/*"
                    style={{ display: 'none' }}
                    id={`bill-upload-${event.id}`}
                    type="file"
                    onChange={(e) => handleUploadBill(e, event.id)}
                  />
                  <label htmlFor={`bill-upload-${event.id}`}>
                    <IconButton color="primary" aria-label="upload bill" component="span">
                      <CloudUploadIcon />
                    </IconButton>
                  </label>
                </TableCell>
                <TableCell>
                  <input
                    accept="application/pdf,image/*"
                    style={{ display: 'none' }}
                    id={`report-upload-${event.id}`}
                    type="file"
                    onChange={(e) => handleUploadReport(e, event.id)}
                  />
                  <label htmlFor={`report-upload-${event.id}`}>
                    <IconButton color="primary" aria-label="upload report" component="span">
                      <CloudUploadIcon />
                    </IconButton>
                  </label>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleRowSubmit(event.id)}
                  >
                    Submit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BookingCalendar;
