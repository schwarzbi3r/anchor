import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { RpcTooLong } from '../target/types/rpc_too_long';

describe('rpc-too-long', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.RpcTooLong as Program<RpcTooLong>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.oracleQueueSetVrfSettings({});
    // const tx = await program.instruction.oracleQueueSetVrfSettingss({})
    console.log("Your transaction signature", tx);
  });
});
