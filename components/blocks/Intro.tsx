export default function WelcomeBackUserBlock() {
    return (
        <div
      style={{
        width: '100%',
        height: '60px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 11,
        display: 'inline-flex',
      }}
    >
      <div
        style={{
          alignSelf: 'stretch',
          height: '100%',
          paddingLeft: 'calc((100% - 925px) / 2)',
          paddingRight: 'calc((100% - 925px) / 2)',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 10,
          display: 'inline-flex',
        }}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            position: 'relative',
            alignSelf: 'center',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              left: 0,
              top: 0,
              position: 'absolute',
              background: 'rgba(255, 69, 0, 0.20)',
              borderRadius: '10px',
            }}
          />
          <div
            style={{
              width: '18px',
              height: '24.43px',
              left: '8.80px',
              top: '5.98px',
              position: 'absolute',
              background: '#FF4500',
              border: '2px #FF4500 solid',
            }}
          ></div>
        </div>
        <div
          style={{
            width: '248px',
            height: '36px',
            color: '#29303D',
            fontSize: '24px',
            fontFamily: 'Inter',
            fontWeight: '700',
            lineHeight: '36px',
            wordWrap: 'break-word',
          }}
        >
          Welcome back, User!
        </div>
      </div>
      <div
        style={{
          alignSelf: 'stretch',
          height: '1px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          display: 'flex',
        }}
      >
        <div
          style={{
            alignSelf: 'stretch',
            height: '0',
            border: '2px #29303D solid',
            width: '80%',
            marginLeft: '10%',
            marginRight: '10%',
          }}
        ></div>
      </div>
    </div>
  );
};

export function NewModelsBlock() {
    return (
        <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', height: 46, paddingLeft: 33, paddingRight: 33, justifyContent: 'space-between', alignItems: 'flex-end', display: 'inline-flex'}}>
        <div style={{width: 240, alignSelf: 'stretch', paddingLeft: 10, paddingRight: 10, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', paddingLeft: 10, paddingRight: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div style={{width: 40, height: 40, position: 'relative'}}>
                    <div style={{width: 40, height: 40, left: 0, top: 0, position: 'absolute', borderRadius: 10}} />
                    <div style={{width: 30, height: 30, left: 5, top: 5, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{width: 20, height: 20, border: '3px #09B2E7 solid'}}></div>
                        <div style={{width: 11.25, height: 11.25, border: '3px #09B2E7 solid'}}></div>
                        <div style={{width: 2.50, height: 2.50, border: '3px #09B2E7 solid'}}></div>
                    </div>
                </div>
                <div style={{width: 126, alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>What’s New?</div>
            </div>
        </div>
        <div style={{width: 240, alignSelf: 'stretch', paddingLeft: 10, paddingRight: 10, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', borderRadius: 10}} />
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                    <div style={{width: 40, height: 40, position: 'relative'}}>
                        <div style={{width: 40, height: 40, left: 0, top: 0, position: 'absolute', borderRadius: 10}} />
                        <div style={{width: 30, height: 30, left: 5, top: 5, position: 'absolute'}}>
                            <div style={{width: 22.50, height: 24.99, left: 3.75, top: 2.50, position: 'absolute', border: '3px #FFAB2E solid'}}></div>
                            <div style={{width: 21.77, height: 6.25, left: 4.11, top: 8.75, position: 'absolute', border: '3px #FFAB2E solid'}}></div>
                            <div style={{width: 0, height: 12.50, left: 15, top: 15, position: 'absolute', border: '3px #FFAB2E solid'}}></div>
                        </div>
                    </div>
                    <div style={{width: 137, alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Latest Models</div>
                </div>
            </div>
        </div>
    </div>
    <div style={{padding: 16, background: '#F1F5F9', borderRadius: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{padding: 20, background: '#F8FAFC', borderRadius: 15, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 14, display: 'flex'}}>
                    <div style={{justifyContent: 'center', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                        <div style={{width: 50, height: 50, padding: 7, background: '#111827', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: 36, height: 36, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                <div style={{width: 13.39, height: 21.38, border: '2px white solid'}}></div>
                                <div style={{width: 18.71, height: 16.26, border: '2px white solid'}}></div>
                                <div style={{width: 20.40, height: 18.05, border: '2px white solid'}}></div>
                                <div style={{width: 20.39, height: 18.05, border: '2px white solid'}}></div>
                                <div style={{width: 13.39, height: 21.38, border: '2px white solid'}}></div>
                                <div style={{width: 18.71, height: 16.06, border: '2px white solid'}}></div>
                            </div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                            <div style={{padding: 6, background: 'white', borderRadius: 15, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{width: 387, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 65, display: 'inline-flex'}}>
                                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 3, display: 'inline-flex'}}>
                                                <div style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: 24, wordWrap: 'break-word'}}>GPT 4 - Vision is now here!</div>
                                                <div style={{alignSelf: 'stretch', height: 0, border: '2px #111827 solid'}}></div>
                                                <div style={{color: '#64748B', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>November 22, 2023</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{padding: 6, background: 'white', borderRadius: 15, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                                <div style={{width: 387, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    {/* <div style={{flex: '1 1 0'}}><span style="color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'">OpenAI’s latest and most capable multi-modal model.<br/></span><span style="color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'">Code Interpreter<br/>Image Creation.</span></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{padding: 20, background: '#F8FAFC', borderRadius: 15, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 14, display: 'flex'}}>
                    <div style={{justifyContent: 'center', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                        <div style={{width: 50, height: 50, padding: 7, background: '#111827', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: 36, height: 36, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                <div style={{width: 27, height: 27, position: 'relative'}}>
                                    <div style={{width: 22.50, height: 15, left: 0, top: 12, position: 'absolute', border: '3px white solid'}}></div>
                                    <div style={{width: 12, height: 19.50, left: 15, top: 0, position: 'absolute', background: '#FF4500', border: '3px #94A3B8 solid'}}></div>
                                </div>
                            </div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                            <div style={{padding: 6, background: 'white', borderRadius: 15, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{width: 387, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 65, display: 'inline-flex'}}>
                                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 3, display: 'inline-flex'}}>
                                                <div style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: 24, wordWrap: 'break-word'}}>Ember V1 - Release</div>
                                                <div style={{alignSelf: 'stretch', height: 0, border: '2px #111827 solid'}}></div>
                                                <div style={{color: '#64748B', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>November 22, 2023</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{padding: 6, background: 'white', borderRadius: 15, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                                <div style={{width: 387, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div style={{flex: '1 1 0', color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>This announcement marks the first release of our Artificial Intelligent platform, where you can chat, create and code with many open-source LLM’s.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}