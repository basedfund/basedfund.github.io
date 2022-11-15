import { StepCardProps } from './StepCards';

export const STEP_CARD_CONTEXTS: StepCardProps[] = [
  {
    id: '1',
    title: 'Deposit',
    description: [
      'Deposit supported pegged assets like stablecoins into a Bedrock Vault.',
      'Your assets are pooled with others enabling all depositors to be covered but also insure each other.',
      'If you need to withdraw you can at any moment in time. Instant withdrawals are charged a fee,'
    ],
    rotation: -1,
    top: '-25px'
  }, {
    id: '2',
    title: 'Depeg or Hack occurs',
    description: ['If your deposited stablecoin experiences a depeg event inline with the stated details on the vault, you are entitled to file a claim.'],
    rotation: 3,
    top: '5px'
  }, {
    id: '3',
    title: 'Reimbursement',
    description: [
      'Bedrock will validate the depeg automatically, lock assets  across our vaults and reimburse you based on your respective ownership percentage.',
      'To facilitate this we charge a fee.'
    ],
    rotation: -2,
    top: '-2px',
  }
];
