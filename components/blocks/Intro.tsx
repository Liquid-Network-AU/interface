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