---
sidebar_position: 3
title: NDR Management
description: Learn how NDR Management Automation helps resolve failed deliveries faster by automatically connecting with customers.
---

# NDR Management Automation FAQ

NDR (Non-Delivery Report) Management Automation helps you resolve failed deliveries faster by automatically connecting with customers when a delivery attempt fails.

---

## Overview

### Q: What is NDR Management Automation?
**A:** NDR Management Automation automatically reaches out to customers when a delivery attempt fails (NDR raised). It helps:
- Quickly capture reattempt instructions
- Collect address corrections for successful redelivery
- Identify orders that should be cancelled or returned
- Reduce manual calling effort by your ops team

### Q: When does the automation trigger?
**A:** The automation triggers when:
- A carrier reports a failed delivery attempt (NDR status)
- The shipment status changes to "Undelivered" or "NDR Raised"
- The NDR reason is captured from the carrier

### Q: What are the benefits of NDR Management Automation?
**A:** Key benefits include:
- **Faster resolution** - Reach customers within minutes of failed delivery
- **Higher delivery success** - Get reattempt instructions quickly
- **Reduced RTO** - Resolve issues before shipment is returned
- **Lower ops workload** - Automate manual calling efforts
- **Better customer experience** - Proactive communication on delivery issues

---

## How NDR Works

### Q: What is an NDR?
**A:** NDR stands for Non-Delivery Report. It's raised when a carrier attempts delivery but cannot complete it. Common NDR reasons include:
- Customer not available
- Address incomplete or incorrect
- Customer refused delivery
- Premises closed
- Phone not reachable

### Q: What happens when an NDR is raised?
**A:** When an NDR is raised:
1. Carrier reports the failed attempt with a reason
2. Shipment status changes to NDR/Undelivered
3. NDR Management automation triggers (if enabled)
4. System reaches out to customer via WhatsApp and/or AI call
5. Customer response is captured (reattempt, address change, cancel)
6. Action is taken based on customer's response

### Q: How long does a shipment stay in NDR status?
**A:** A shipment with NDR status remains under "Need Attention" until it reaches a terminal status:
- **Delivered** - Successfully delivered after reattempt
- **RTO** - Returned to origin
- **Lost** - Marked as lost

Even if the shipment moves back to "In Transit" or "Out for Delivery" after an NDR, it continues to appear under Need Attention until closure.

---

## Configuration

### Q: How do I enable NDR Management Automation?
**A:**
1. Go to **Settings > Automations** in your Velocity Shipping dashboard
2. Find the **NDR Management** section
3. Toggle the automation **ON**
4. Configure your preferences for WhatsApp and AI calling
5. Save your settings

**Note:** Only admin users can enable/disable NDR automation. The Ops calling configuration is managed on the admin side and cannot be changed by regular users.

### Q: Can I configure which shipments get automation?
**A:** Yes. NDR automation can be configured based on:
- **Order type** - COD only, prepaid only, or both
- **Tags** - Exclude shipments with specific tags

### Q: How do I configure the channels (WhatsApp/AI Call)?
**A:** In the automation settings, configure:
- **WhatsApp Automation** - Enable/disable, address update option, retry settings
- **AI Calling Automation** - Enable/disable, wait time, retry count, retry intervals

### Q: What is the wait time between WhatsApp and AI Call?
**A:** The wait time is configurable (default: 30 minutes). If no response is received on WhatsApp within this time, the AI call is triggered automatically.

---

## Outcomes and Resolution

### Q: What outcomes can NDR Management capture?
**A:** The automation captures these outcomes:
- **Reattempt Requested** - Customer wants another delivery attempt
- **Address Change Requested** - Customer provided a new address
- **Cancellation Requested** - Customer wants to cancel/return the shipment
- **Confirmed** - Customer confirmed details for reattempt
- **failed** - Could not reach the customer

### Q: What happens after customer requests reattempt?
**A:** When a customer requests reattempt:
1. The outcome is recorded with reattempt request
2. The request is sent to the carrier (if auto-reattempt is enabled)
3. The carrier schedules another delivery attempt
4. Shipment status updates accordingly

### Q: What happens after customer provides new address?
**A:** When a customer provides a new address:
1. The modified address is captured and stored
2. The address update is sent to the carrier
3. The carrier attempts delivery at the new address
4. You can see the modified address in reports

### Q: What happens after customer requests cancellation?
**A:** When a customer requests cancellation:
1. The cancellation request is recorded
2. Depending on your settings, the shipment may be marked for RTO
3. Carrier is notified about the cancellation
4. The shipment returns to origin

---

## NDR Panel (Ops Dashboard)

### Q: What is the NDR Panel?
**A:** The NDR Panel is a dedicated view in the Ops Dashboard that shows all shipments requiring attention due to NDR. It provides:
- List of all NDR shipments
- Automation status (WhatsApp/AI Call outcomes)
- Filters to find specific shipments
- Actions to manage NDR resolution

### Q: How do I access the NDR Panel?
**A:** Go to **Orders > Need Attention > Issue = NDR** or access the Ops Dashboard and navigate to the NDR Panel section.

### Q: What filters are available in the NDR Panel?
**A:** The NDR Panel provides these filters:
- **WhatsApp Call Status** - Sent, Delivered, Read, Ineligible
- **AI Call Status** - Completed, Not Answered, Ineligible
- **WhatsApp Output** - Reattempt, Address Change, Cancellation
- **AI Call Output** - Reattempt Requested, Address Change Requested, Cancellation Requested
- **Delivery Attempted (AI Call)** - Confirmed/Denied (for fake attempt detection)
- **Assigned To** - Filter by ops team member

### Q: What is the "Ineligible" status?
**A:** "Ineligible" means the automation service is not activated for that shipment. This could be because:
- The client hasn't subscribed to NDR automation
- The specific channel (WhatsApp/AI Call) is not enabled
- Filter the "Ineligible" shipments to manually reach out to these customers

### Q: What does "Delivery Attempted" Confirmed/Denied mean?
**A:** This indicates whether the customer confirmed a delivery attempt was actually made:
- **Confirmed** - Customer confirms delivery was attempted
- **Denied** - Customer says no one came (possible fake attempt by carrier)

This helps identify fake delivery attempts for escalation.

---

## NDR Reasons

### Q: What are the common NDR reasons?
**A:** Common NDR reasons include:
- **Customer Unavailable** - Customer not present at delivery location
- **Address Issue** - Incomplete or incorrect address
- **Customer Refused** - Customer refused to accept the delivery
- **Premises Closed** - Business/home was closed
- **Phone Unreachable** - Could not contact customer by phone
- **Payment Issue** - COD amount not available or incorrect
- **Future Delivery Requested** - Customer asked for delivery on another date
- **Others** - Miscellaneous reasons from carrier

### Q: How are NDR reasons categorized?
**A:** Velocity Shipping standardizes NDR reasons from various carriers into common buckets for easier analysis. The system maps carrier-specific reasons to these standard categories for consistent reporting across all carriers.

### Q: Where can I see the NDR reason for a shipment?
**A:** NDR reasons are visible in:
- **Need Attention** section under the Issue column
- **Order details** drawer
- **NDR reports** (First NDR Reason, Latest NDR Reason)
- **Analytics dashboard** for NDR reason split

### Q: What if NDR reason shows as "Others"?
**A:** If the reason is mapped as "Others", you can see the raw carrier reason as additional information. This helps you understand the specific issue even when it doesn't fit standard categories.

---

## WhatsApp Flow for NDR

### Q: What message does the customer receive for NDR?
**A:** When an NDR is raised, the customer receives a WhatsApp message with:
- Your brand name
- Information about the failed delivery
- NDR reason (e.g., "We couldn't reach you for delivery")
- Options to request reattempt, update address, or cancel

### Q: Can customers respond to NDR WhatsApp?
**A:** Yes. Customers can interact with the message to:
- Request a reattempt delivery
- Provide a corrected address
- Request cancellation
- The response is captured automatically

### Q: What if the customer doesn't respond to WhatsApp?
**A:** If no response is received within the configured wait time:
1. The system moves to AI calling (if enabled)
2. The AI agent calls the customer to capture resolution
3. Multiple retry attempts are made based on your settings

---

## AI Voice Call for NDR

### Q: What happens during the NDR AI call?
**A:** The AI agent (Vani):
1. Greets the customer and introduces the call purpose
2. Explains that delivery couldn't be completed
3. Asks what the customer would like to do
4. Captures response (reattempt, address change, cancel)
5. Confirms delivery was actually attempted (fake attempt detection)

### Q: What goals does the NDR AI call capture?
**A:** The AI captures:
- **Reattempt preference** - Whether customer wants reattempt
- **Address update** - Any new/corrected address
- **Cancellation request** - If customer wants to cancel
- **Delivery attempted confirmation** - Whether carrier actually attempted

### Q: How do I access NDR call recordings?
**A:**
1. Go to the shipment details
2. Open the Automations or AI Agents History tab
3. Click on the call entry to access recording, transcript, and summary

---

## Ops Team Actions

### Q: Can the ops team manually call customers?
**A:** Yes. If automation doesn't resolve the NDR:
1. Ops team can see unresolved NDRs in the panel
2. They can manually call customers
3. Record the outcome using Ops Remarks
4. Update the resolution status

### Q: What Ops Remarks can be added?
**A:** The ops team can add these standard remarks:
- Schedule delivery for different date
- Delivered but not updated
- Customer will self-pickup the shipment
- Customer did not place this order
- Shipment still in transit

### Q: How does auto-assignment work for NDR?
**A:** Admin can configure auto-assignment for NDR orders:
1. Add multiple assignee email IDs
2. System distributes unassigned NDR orders equally among assignees
3. New NDR orders are automatically assigned
4. Each order shows "Assigned To" for visibility
5. Filter by "Assigned To" to see your allocated orders

### Q: Can I initiate reattempt from the NDR Panel?
**A:** Yes. For supported carriers, you can:
1. Select shipments in NDR Panel
2. Click "Initiate Reattempt" action
3. The reattempt request is sent to the carrier
4. Shipment is scheduled for another delivery attempt

---

## Reporting

### Q: What NDR fields are in reports?
**A:** The NDR report includes:
- First NDR Reason
- Second NDR Reason
- Third NDR Reason
- Latest NDR Reason
- NDR Status (Open/Closed/Not Applicable)
- WhatsApp Output
- AI Call Output
- Delivery Attempted (AI Call) - Confirmed/Denied
- Modified Address (if any)
- AI Conversation Link
- Assigned To

### Q: What is NDR Status in reports?
**A:** NDR Status indicates the current state:
- **Open** - NDR raised, not yet resolved (not Delivered/RTO/Lost)
- **Closed** - NDR resolved (Delivered, RTO, or Lost)
- **Not Applicable** - Shipment never had an NDR

### Q: Where can I see NDR analytics?
**A:** NDR analytics are available in:
- **Analytics Dashboard** - NDR reason split, resolution rates
- **Need Attention** section - Current open NDRs
- **Reports** - Detailed shipment-level data

### Q: How do I download the NDR report?
**A:** From the NDR Panel or Orders page:
1. Apply desired filters
2. Click the Download button
3. Select report format
4. The report includes all NDR-related fields

---

## NDR Status Tracking

### Q: How do I know if an NDR is resolved?
**A:** Check the NDR Status:
- **Open** - Still needs attention
- **Closed** - Resolved (delivered, RTO, or lost)

Also check the latest shipment status - if it shows Delivered, RTO, or Lost, the NDR is resolved.

### Q: Why does a shipment still show in Need Attention after OFD?
**A:** Shipments with NDR history continue to appear in Need Attention until they reach a terminal status (Delivered/RTO/Lost). This is intentional - even if a shipment moves back to "Out for Delivery" after an NDR, it needs monitoring until successfully delivered.

### Q: How do I track multiple NDR attempts?
**A:** Each NDR attempt is captured separately:
- First NDR Reason - From first failed attempt
- Second NDR Reason - From second failed attempt
- Third NDR Reason - From third failed attempt
- Latest NDR Reason - Most recent attempt

This helps you understand the pattern of delivery failures.

---

## Lost Shipments

### Q: How are lost shipments handled?
**A:** Shipments marked as Lost (either by carrier or through Ops Dashboard):
- Appear under Issue = Lost in Need Attention
- Are automatically moved out of Need Attention after 60 days from pickup
- Are tracked separately from active NDR cases

### Q: Can I mark a shipment as lost from the NDR Panel?
**A:** Yes. Ops team can mark shipments as lost from the panel if the shipment is believed to be lost during transit.

---

## Troubleshooting

### Q: Why is NDR automation not triggering?
**A:** Check these common causes:
1. **Automation not enabled** - Verify in Settings > Automations
2. **VAS subscription inactive** - Check your subscription status
3. **Order type filter** - Check if the shipment matches COD/Prepaid filter
4. **Already processed** - Automation may have already run

### Q: Why does the NDR Panel show "Ineligible"?
**A:** "Ineligible" means:
- NDR automation is not enabled for this client
- The specific channel (WhatsApp/AI) is not activated
- Use this filter to find shipments requiring manual outreach

### Q: Customer says they didn't receive NDR notification?
**A:** Verify:
1. Phone number is correct
2. WhatsApp status in automation history
3. AI call status (check if within calling hours)
4. Customer may have blocked business messages

### Q: Address was updated but carrier didn't reattempt?
**A:** After address update:
- Ensure the update was sent to carrier
- Check carrier's reattempt scheduling
- Contact ops if carrier hasn't scheduled reattempt
- Some carriers may require manual intervention

---

## Best Practices

### Q: How can I reduce NDR rates?
**A:** Reduce NDR rates by:
1. **Enable Order Confirmation** - Verify addresses before shipping
2. **Send shipment updates** - Keep customers informed
3. **Enable NDR automation** - Quick resolution of failed attempts
4. **Use RTO Score** - Identify high-risk orders early

### Q: What's the best configuration for NDR Management?
**A:** Recommended settings:
- Enable both WhatsApp and AI Calling
- Set wait time to 30-60 minutes
- Enable address updates
- Configure auto-assignment for ops team
- Monitor fake attempt detection

### Q: How can I improve NDR resolution rates?
**A:** Improve resolution by:
- Respond quickly - time is critical for NDR
- Enable both communication channels
- Train ops team to handle escalations
- Track fake attempts and escalate to carriers
- Review NDR reason patterns and address root causes

---

## Integration with Carriers

### Q: Which carriers support reattempt from panel?
**A:** Major carriers like Delhivery, DTDC, and others support reattempt initiation from Velocity Shipping. Check with support for the current list of supported carriers.

### Q: How does address update work with carriers?
**A:** When a customer provides a new address:
1. Velocity Shipping captures the address
2. Sends update to carrier via API (if supported)
3. Carrier updates their system
4. Next attempt is made to new address

### Q: What if the carrier doesn't support automated reattempt?
**A:** For carriers without API support:
1. Reattempt request is captured in Velocity Shipping
2. Ops team may need to manually coordinate with carrier
3. The request is visible in NDR Panel for tracking

---

## Need Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Velocity Shipping dashboard

[Back to Automations Overview](./)
