import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BasicGridReturn from './Grid';
import { Grid, Typography } from '@mui/material';
import BasicButtonGroupReturn from './Button';
import ContentRight from './ContentRight';
import IconLike from './IconLike'

export default function MyBox() {
    return (
        <>
            <Box component="span" sx={{ p: 5, width: 1000, height: 1000, border: '1px solid grey', marginLeft: 50 }}>
                <Grid container>
                    <Grid item xs={7}>
                        <Typography variant="h5" component="div" gutterBottom>WHAT IS NIKE’S RETURN POLICY?
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            TEMPORARY RETURN EXTENSION
                        </Typography>
                        <Typography variant="h5" display="div" gutterBottom>
                            All Nike purchases have an extended 60-day return policy (some exceptions apply).
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            All purchases made on Nike.com, in any of the Nike apps, or at a Nike store have a 60-day return period. Go ahead and test out your Nike or Converse purchase to make sure it works for you.
                            You can return items (some exceptions apply) for any reason within those 60 days. That includes custom Nike By You sneakers. Even after 60 days, you can still return items if they’re unworn and unwashed. And remember, returns are always free for Nike Members.
                            So go ahead, shop with confidence, and enjoy your 60-day trial.
                        </Typography>
                        <BasicButtonGroupReturn />
                        <Typography variant="body1" gutterBottom>
                            FAQs
                            How do I return a Nike order?
                            If you’re a Nike Member, sign in before you start your free return from your orders page. If you’re not a Nike Member, you’ll need to access your order with your order number and email address. You also can head to your nearest Nike store to make a return. For additional details, check out our return instructions.

                            How do I return a Nike store purchase?
                            You can take the items you want to return to any Nike store.

                            Please note: Some stores may currently be closed.

                            Do I need a receipt to return items at a Nike store?
                            For orders placed on Nike.com or in any of the Nike apps, just have either your order barcode or order number ready. Nike Members can also provide the email address or phone number used to place the order.

                            For store purchases, the quickest and easiest way to return items is to provide the original store receipt. If you no longer have the receipt, here are your options:

                            If you provided your Nike Membership email address or had your Nike Pass scanned during checkout, a Nike store athlete may be able to look up your order and provide a full refund to your original form of payment.
                            If you did not provide your Nike Membership information, and the items you want to return are unworn and unwashed, you still may be able to return them for an in-store credit for the current price of the items. We also may be able to help you with an exchange.
                            If you are returning items with a gift receipt, we’ll provide you in-store credit for the amount of the gift receipt. We also can help you exchange your gift.
                            Can I return items I purchased at a Nike Clearance store?
                            No, items purchased at a Nike Clearance store cannot be returned or exchanged unless they're defective or flawed.
                        </Typography>
                    </Grid>
                    <div style={{
                        width: '1px',
                        background: 'black',
                        height: '1000px'
                    }}>
                    </div>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={3}>
                        <ContentRight />
                    </Grid>
                </Grid>
                <IconLike xs={{ marginLeft: '10' }} />
            </Box>
        </>
    );
}