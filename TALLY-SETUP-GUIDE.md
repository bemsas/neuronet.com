# Tally Form Setup Guide for ROI Calculator

## Step 1: Create Your Tally Form

1. Go to [tally.so](https://tally.so) and sign up (free account)
2. Click "Create new form"
3. Add the following fields:

### Required Fields (Visible to users):
- **Name** (Text input, required)
- **Email** (Email input, required)
- **Company Name** (Text input, optional)
- **Phone Number** (Phone input, optional)
- **Best Time to Call** (Dropdown: Morning / Afternoon / Evening, optional)

### Hidden Fields (Auto-filled from calculator):
These will be automatically populated when the form opens:

1. Click "Add block" → "Hidden field"
2. Add these hidden fields (exactly as named):
   - `company_size` (stores: startup/small/medium/large)
   - `industry` (stores: healthcare/finance/manufacturing/etc)
   - `manual_hours` (stores: number)
   - `hourly_cost` (stores: number)
   - `ai_solution` (stores: automation/chatbot/etc)
   - `annual_savings` (stores: calculated savings)
   - `efficiency_gain` (stores: percentage)
   - `payback_period` (stores: months)
   - `roi_percentage` (stores: 3-year ROI)

## Step 2: Configure Form Settings

1. Click **Settings** → **General**
   - Enable "Show Tally branding" (free tier requirement)
   - Set Auto-close after submission: 5 seconds

2. Click **Settings** → **After submission**
   - Choose: "Show a custom message"
   - Message: "Thank you! We'll be in touch within 24 hours to discuss your AI strategy."

3. Click **Settings** → **Notifications**
   - Enable email notifications to: `hello@neuronet.dev`
   - Subject: "New ROI Calculator Lead: {Name} from {Company Name}"

## Step 3: Get Your Form ID

1. Click **Share** button (top right)
2. Look for the form URL: `https://tally.so/r/YOUR_FORM_ID`
3. Copy the `YOUR_FORM_ID` part

## Step 4: Update Your Website

Open [roi-calculator.html](roi-calculator.html) and find line 630:

```javascript
Tally.openPopup('YOUR_FORM_ID', {
```

Replace `'YOUR_FORM_ID'` with your actual Tally form ID, like:

```javascript
Tally.openPopup('wMXYZ123', {
```

## Step 5: Test It

1. Open your ROI calculator page
2. Fill out the calculator form
3. Click "Calculate ROI"
4. Click "Book Free Strategy Session"
5. The Tally form should popup with calculator data pre-filled in hidden fields
6. Fill in your name/email and submit
7. Check that you receive the email notification

## What Happens When Someone Books?

1. User fills calculator → clicks "Book Free Strategy Session"
2. Tally form popup appears
3. User enters name, email, company (calculator data is hidden but captured)
4. After submission:
   - You get email notification with all data
   - User sees thank you message
   - After 2 seconds, Akiflow calendar opens in new tab (optional)

## Optional Enhancements

### Option A: Skip Akiflow Redirect
If you don't want to auto-open Akiflow, remove lines 638-640 in roi-calculator.html:

```javascript
setTimeout(() => {
    window.open('https://booking.akiflow.com/andy_king-1e34', '_blank');
}, 2000);
```

### Option B: Add Zapier/Make Integration
1. In Tally, go to **Integrations**
2. Connect to Zapier or Make.com
3. Create automation to:
   - Add to Google Sheets
   - Send to CRM
   - Trigger email sequence
   - Create calendar event

### Option C: Customize Form Appearance
1. In Tally form builder, click **Theme**
2. Match your brand colors:
   - Primary color: #3b82f6 (blue)
   - Button color: #10b981 (green)
   - Background: #1e1b4b (dark purple)

## Viewing Submissions

Go to [tally.so/forms](https://tally.so/forms) → Select your form → **Responses** tab

You'll see all submissions with:
- User contact info
- All calculator inputs and results
- Timestamp
- Export to CSV option

## Support

If you need help:
- Tally docs: https://tally.so/help
- Tally community: https://tally.so/community
