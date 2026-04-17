# Shipping Labels FAQ

This guide covers everything you need to know about shipping labels in Shipfast, including label customization, ATS labels, thermal printing, and troubleshooting common issues.

---

## Table of Contents

1. [Understanding Shipping Labels](#1-understanding-shipping-labels)
2. [Label Customization Options](#2-label-customization-options)
3. [ATS Labels (Carrier-Specific Labels)](#3-ats-labels-carrier-specific-labels)
4. [Label Formats & Printing](#4-label-formats--printing)
5. [Multi-Product Labels](#5-multi-product-labels)
6. [Troubleshooting Label Issues](#6-troubleshooting-label-issues)
7. [Best Practices](#7-best-practices)

---

## 1. Understanding Shipping Labels

### What is a shipping label?

A shipping label is a printed document attached to your package that contains all the information needed for the courier to pick up and deliver the shipment. It includes:
- Tracking number (AWB) with barcode
- Sender (your warehouse) details
- Customer delivery address
- Order information
- Courier routing codes

### When are shipping labels generated?

Labels are generated automatically when:
1. You click **Ship** on an order
2. A courier is assigned and AWB is generated
3. The label becomes available for download

### How do I download a shipping label?

**For a single order:**
1. Go to **Orders** > **Ready to Ship**
2. Click on the order
3. Click **Download Label** button

**For multiple orders:**
1. Select multiple orders using checkboxes
2. Click **Download Labels** from the bulk action menu
3. A combined PDF with all labels will be generated

---

## 2. Label Customization Options

### Where do I configure label settings?

Go to **Settings** > **Invoicing & Label** to access all label customization options.

### What can I customize on my shipping labels?

| Option | Description | Default |
|--------|-------------|---------|
| **Product Name in Label** | Show product names on the label | Off |
| **SKU Name in Label** | Show SKU codes on the label | Off |
| **Include Seller Address** | Show your warehouse/return address | On |
| **Include Customer Phone** | Display customer's phone number | On |
| **Use Brand Name** | Show brand name instead of legal name | Off |
| **Include Product Price** | Display price on the label | Off |
| **Include GST No** | Show your GST registration number | Off |
| **Include Customer Care Email** | Display your support email | Off |
| **Include Customer Care Number** | Display your support phone number | Off |

### How do I enable product names on my labels?

1. Go to **Settings** > **Invoicing & Label**
2. Find **Product Name in Label**
3. Toggle it **ON**
4. Click **Save**

All new labels will now include product names.

### Can I show my brand name instead of my company's legal name?

Yes! Enable the **Use Brand Name** option:
1. Go to **Settings** > **Invoicing & Label**
2. Enable **Use Brand Name**
3. Make sure your brand name is configured in **Settings** > **Profile** or your store settings

The label will then display your brand name instead of the legal/seller name.

### How do I add customer care details to my labels?

1. First, add your customer care details:
   - Go to **Settings** > **Profile Details**
   - Enter your **Customer Care Email** and **Customer Care Phone Number**
   - Save the changes

2. Then enable them on labels:
   - Go to **Settings** > **Invoicing & Label**
   - Enable **Include Customer Care Email** and/or **Include Customer Care Number**
   - Save

### Can I show customer care details without showing my seller address?

Yes! The customer care details (email and phone number) are independent of the seller address setting. You can:
- Disable "Include Seller Address"
- Enable "Include Customer Care Email" and/or "Include Customer Care Number"

The customer care details will still appear on the label even without the full seller address.

### How do I add my GST number to labels?

1. Ensure your GST number is registered in **Settings** > **Company KYC**
2. Go to **Settings** > **Invoicing & Label**
3. Enable **Include GST No**
4. The GST number will appear on all your labels

---

## 3. ATS Labels (Carrier-Specific Labels)

### What are ATS labels?

ATS (Air Transport System) is a specific carrier partner. When shipping via ATS or certain other carriers, the labels are generated directly by the carrier's system rather than by Shipfast.

### Which carriers provide their own labels?

Several carriers generate labels from their own systems:
- **ATS** (Air Transport System)
- **Delhivery** (optional)
- **BlueDart** (optional)
- **Ekart** (optional)
- **Others** as configured

These are called "external labels" because they come from the carrier's API.

### How do external/carrier labels work?

1. When you ship an order with a carrier that provides external labels:
   - Shipfast requests the label from the carrier's system
   - The carrier generates and returns the label
   - Shipfast stores it for you to download

2. External labels may look different from Shipfast-generated labels because they follow the carrier's format.

### Can I customize carrier-provided labels?

No, carrier-provided (external) labels use the carrier's standard format and cannot be customized through Shipfast settings. The customization options only apply to Shipfast-generated labels.

### Why does my label look different for different carriers?

Different carriers may use different label formats:
- **Shipfast labels**: Follow your customization settings
- **Carrier labels**: Follow the carrier's standard format

If you want consistent labels, you can check with your account manager if Shipfast-generated labels are available for your carrier.

---

## 4. Label Formats & Printing

### What label sizes are available?

| Format | Dimensions | Best For |
|--------|-----------|----------|
| **A6** | 105mm x 148mm (4" x 6") | Thermal label printers |
| **A4** | 210mm x 297mm (standard) | Regular inkjet/laser printers |

### What is a thermal label printer?

A thermal label printer is a specialized printer that prints on thermal paper or thermal transfer labels. Benefits include:
- Faster printing
- No ink or toner needed
- Labels don't smudge
- Professional appearance
- Cost-effective for high volume

### How do I set up thermal label printing?

1. Purchase a thermal label printer (common models: TSC, Zebra, Brother)
2. Install the printer driver on your computer
3. Download labels in A6 format from Shipfast
4. Print using your thermal printer

### What paper size should I use?

- **Thermal printers**: Use 4x6 inch (A6) thermal labels
- **Regular printers**: Use standard A4 paper
  - A4 format prints 4 labels per page (you'll need to cut them)
  - Or print A6 format on A6 paper if your printer supports it

### How do I print multiple labels on one page?

When using A4 format:
- 4 labels are automatically arranged on each A4 page
- Cut along the borders after printing
- Each label is the standard A6 size

---

## 5. Multi-Product Labels

### Can labels show all products in an order?

By default, labels show up to 4-5 products. If your order has more items, it displays "+ X products" to indicate additional items.

### What if I need to show all products on the label?

You can enable the **Show All Products in Label** option:
1. Go to **Settings** > **Invoicing & Label**
2. First, enable either **Product Name in Label** or **SKU Name in Label**
3. Then enable **Show All Products in Label**
4. Confirm when prompted about multi-page labels

### What happens when I enable "Show All Products"?

- Labels may extend to multiple pages if the order has many items
- Each page will be part of the same label
- This is useful if you use the label as a picking/packing checklist

### Is there a limit to how many products can be shown?

There's no hard limit, but be aware:
- Orders with many items will generate multi-page labels
- This uses more paper
- Consider your printing costs and workflow

### How do I disable multi-page labels?

Turn off the **Show All Products in Label** option. Labels will return to showing 4-5 products with "+ X products" for any additional items.

---

## 6. Troubleshooting Label Issues

### Why can't I download a label?

| Reason | Solution |
|--------|----------|
| Order not shipped | Click "Ship" to generate AWB first |
| Label still generating | Wait a few minutes and try again |
| Carrier connectivity issue | Retry later; labels auto-retry in background |
| Browser blocking download | Check your browser's download settings |

### My label is blank or corrupted

1. **Try downloading again**: Sometimes the first download fails
2. **Clear browser cache**: Old cached data might interfere
3. **Try a different browser**: Some PDF viewers work better than others
4. **Contact support**: If the issue persists with multiple labels

### The barcode on my label won't scan

Possible causes and solutions:
- **Low print quality**: Increase print resolution to 300 DPI or higher
- **Printer ink low**: Replace ink/toner or use thermal printer
- **Label damaged**: Reprint the label
- **Scanner issue**: Test scanner with other barcodes

### Customer care details not appearing on label

1. Verify details are saved in **Settings** > **Profile Details**
2. Check that the toggles are enabled in **Settings** > **Invoicing & Label**
3. New settings only apply to labels generated after the change
4. Try regenerating the label for existing orders

### Brand name not showing on label

1. Ensure brand name is set up:
   - For stores: Check **Settings** > **Profile** > Store Settings
   - Company level: Check **Settings** > **Company KYC**
2. Enable **Use Brand Name** in label settings
3. The system uses store brand name first, then falls back to company brand name

### GST number not appearing

1. Verify GST number is saved in **Settings** > **Company KYC**
2. Enable **Include GST No** in label settings
3. Note: State-specific GST may be used based on warehouse location

### Labels are too small/large when printing

1. **Check print settings**: Ensure "Fit to page" is disabled
2. **Set correct paper size**: Match paper size to label format (A6 or A4)
3. **Printer margins**: Set margins to minimum or none
4. **Scale to 100%**: Don't let the printer scale the PDF

---

## 7. Best Practices

### For Label Configuration

1. **Set up once, use always**: Configure your label preferences before starting bulk shipments
2. **Test with sample order**: Create a test order and check the label before going live
3. **Keep branding consistent**: Use brand name option for customer-facing labels
4. **Add support info**: Include customer care details so customers can reach you

### For Printing

1. **Use thermal printers for volume**: If shipping 50+ orders daily, invest in a thermal printer
2. **Check print quality**: Regularly verify barcodes are scannable
3. **Keep backup labels**: If a label gets damaged, you can always reprint from Shipfast
4. **Organize by courier**: When printing in bulk, sort by courier for easier handover

### For Multi-Product Orders

1. **Consider your workflow**: Enable all-products view only if you use labels for packing
2. **Balance detail vs. paper**: More products = more pages = more paper
3. **Use picklists alternatively**: Download separate picklists if you need detailed product info

### For Carrier Labels

1. **Understand differences**: Know which carriers provide their own labels
2. **Check label requirements**: Some carriers have specific label placement requirements
3. **Verify AWB placement**: Ensure the barcode/AWB section is not covered when attaching to package

---

## Frequently Asked Questions

### Can I add my logo to the shipping label?

Your company/store logo is automatically included on Shipfast-generated labels if:
- A logo is uploaded in your store settings or company profile
- The logo is in supported format (PNG, JPG)

### Do labels support COD indicators?

Yes! COD orders automatically display a "COD" indicator and the collection amount on the label.

### Can I print labels in different languages?

Currently, labels are generated in English. Contact support if you need regional language support.

### How do I reprint a damaged label?

Simply go to the order details and click **Download Label** again. The same label will be regenerated.

### Are labels stored permanently?

Yes, labels are stored and can be re-downloaded anytime from the order details page.

---

## Need Help?

If you couldn't find your answer here:
- **Email**: support@velocity.in
- **Chat**: Use the chat widget in your Shipfast dashboard
- **Help Center**: Visit our help center for more guides
