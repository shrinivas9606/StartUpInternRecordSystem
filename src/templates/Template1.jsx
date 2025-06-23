import React from "react";

export default function Template6({ data = {
  name: "John Doe",
  domain: "Web Development",
  startDate: "January 1, 2024",
  endDate: "March 31, 2024",  
  certId: "CERT-2024-001"
}, verificationUrl }) {
  // Use verification URL if provided, otherwise create QR with certificate data
  const qrData = verificationUrl || `Certificate ID: ${data.certId}, Name: ${data.name}, Domain: ${data.domain}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(verificationUrl)}`;

  const containerStyle = {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #1f2937 0%, #111827 50%, #0f172a 100%)',
    borderRadius: '12px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    border: '3px solid #374151',
    overflow: 'hidden',
    position: 'relative'
  };

  const backgroundPatternStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      linear-gradient(45deg, transparent 45%, rgba(34, 197, 94, 0.05) 45%, rgba(34, 197, 94, 0.05) 55%, transparent 55%),
      linear-gradient(-45deg, transparent 45%, rgba(34, 197, 94, 0.05) 45%, rgba(34, 197, 94, 0.05) 55%, transparent 55%),
      radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)
    `,
    backgroundSize: '60px 60px, 60px 60px, 200px 200px, 200px 200px'
  };

  const accentLineStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '6px',
    background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 50%, #15803d 100%)'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 10,
    padding: '60px 50px',
    textAlign: 'center',
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    color: '#ffffff'
  };

  const logoContainerStyle = {
    width: '90px',
    height: '90px',
    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 40px',
    boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)',
    border: '4px solid rgba(34, 197, 94, 0.2)',
    position: 'relative'
  };

  const logoInnerStyle = {
    width: '60px',
    height: '60px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(10px)'
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #22c55e 0%, #4ade80 50%, #22c55e 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '15px',
    letterSpacing: '2px',
    textTransform: 'uppercase'
  };

  const subtitleStyle = {
    fontSize: '18px',
    fontWeight: '400',
    color: '#9ca3af',
    marginBottom: '50px',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    position: 'relative'
  };

  const subtitleLineStyle = {
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent 0%, #22c55e 50%, transparent 100%)'
  };

  const presentedToStyle = {
    fontSize: '16px',
    color: '#d1d5db',
    marginBottom: '25px',
    fontWeight: '300'
  };

  const nameStyle = {
    fontSize: '44px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '35px',
    position: 'relative',
    display: 'inline-block',
    textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
  };

  const nameGlowStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    filter: 'blur(1px)',
    opacity: 0.3
  };

  const achievementTextStyle = {
    fontSize: '18px',
    color: '#e5e7eb',
    marginBottom: '15px',
    lineHeight: '1.6',
    maxWidth: '650px',
    margin: '0 auto 15px'
  };

  const domainStyle = {
    fontSize: '32px',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '60px',
    position: 'relative'
  };

  const middleSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '70px',
    flexWrap: 'wrap',
    gap: '40px',
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '40px',
    borderRadius: '15px',
    border: '1px solid rgba(34, 197, 94, 0.2)',
    backdropFilter: 'blur(10px)'
  };

  const durationStyle = {
    textAlign: 'left',
    flex: '1',
    minWidth: '160px'
  };

  const qrSectionStyle = {
    textAlign: 'center',
    flex: '0 0 auto'
  };

  const certIdStyle = {
    textAlign: 'right',
    flex: '1',
    minWidth: '160px'
  };

  const durationBoxStyle = {
    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(22, 163, 74, 0.1) 100%)',
    border: '2px solid rgba(34, 197, 94, 0.3)',
    borderRadius: '12px',
    padding: '20px 15px',
    marginBottom: '10px'
  };

  const qrContainerStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
    border: '3px solid rgba(34, 197, 94, 0.4)',
    display: 'inline-block',
    position: 'relative'
  };

  const qrGlowStyle = {
    position: 'absolute',
    top: '-5px',
    left: '-5px',
    right: '-5px',
    bottom: '-5px',
    background: 'linear-gradient(135deg, #22c55e, #4ade80)',
    borderRadius: '25px',
    opacity: 0.3,
    filter: 'blur(10px)',
    zIndex: -1
  };

  const certIdBoxStyle = {
    background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)',
    border: '2px solid #6b7280',
    borderRadius: '12px',
    padding: '20px 15px'
  };

  const signaturesStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    marginBottom: '50px'
  };

  const signatureStyle = {
    textAlign: 'center',
    position: 'relative'
  };

  const signatureLineStyle = {
    width: '200px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent 0%, #22c55e 50%, transparent 100%)',
    margin: '0 auto 15px'
  };

  const footerStyle = {
    borderTop: '2px solid rgba(34, 197, 94, 0.3)',
    paddingTop: '30px',
    color: '#9ca3af',
    fontSize: '14px',
    background: 'rgba(0, 0, 0, 0.2)',
    margin: '0 -50px -60px',
    padding: '30px 50px',
    backdropFilter: 'blur(5px)'
  };

  const techAccentStyle = {
    position: 'absolute',
    width: '4px',
    height: '40px',
    background: 'linear-gradient(180deg, #22c55e 0%, transparent 100%)'
  };

  // Responsive adjustments
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 768;
  
  const responsiveContentStyle = {
    ...contentStyle,
    padding: isSmallScreen ? '40px 30px' : '60px 50px'
  };

  const responsiveTitleStyle = {
    ...titleStyle,
    fontSize: isSmallScreen ? '32px' : '48px'
  };

  const responsiveNameStyle = {
    ...nameStyle,
    fontSize: isSmallScreen ? '28px' : '44px'
  };

  const responsiveDomainStyle = {
    ...domainStyle,
    fontSize: isSmallScreen ? '22px' : '32px'
  };

  const responsiveMiddleSectionStyle = {
    ...middleSectionStyle,
    flexDirection: isSmallScreen ? 'column' : 'row',
    textAlign: 'center',
    padding: isSmallScreen ? '25px' : '40px'
  };

  const responsiveSignaturesStyle = {
    ...signaturesStyle,
    gridTemplateColumns: isSmallScreen ? '1fr' : '1fr 1fr',
    gap: isSmallScreen ? '50px' : '80px'
  };

  const responsiveFooterStyle = {
    ...footerStyle,
    margin: isSmallScreen ? '0 -30px -40px' : '0 -50px -60px',
    padding: isSmallScreen ? '25px 30px' : '30px 50px'
  };

  return (
    <div style={containerStyle}>
      {/* Background Pattern */}
      <div style={backgroundPatternStyle}></div>
      
      {/* Accent Line */}
      <div style={accentLineStyle}></div>
      
      {/* Tech Accents */}
      <div style={{...techAccentStyle, top: '20px', left: '20px'}}></div>
      <div style={{...techAccentStyle, top: '20px', right: '20px'}}></div>
      <div style={{...techAccentStyle, bottom: '20px', left: '20px', transform: 'rotate(180deg)'}}></div>
      <div style={{...techAccentStyle, bottom: '20px', right: '20px', transform: 'rotate(180deg)'}}></div>

      {/* Content */}
      <div style={responsiveContentStyle}>
        {/* Logo */}
        <div style={logoContainerStyle}>
          <div style={logoInnerStyle}>
            <svg width="32" height="32" fill="#ffffff" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 style={responsiveTitleStyle}>Certificate</h1>
        <div style={{position: 'relative', display: 'inline-block'}}>
          <h2 style={subtitleStyle}>of Professional Excellence</h2>
          <div style={subtitleLineStyle}></div>
        </div>

        {/* Award Text */}
        <p style={presentedToStyle}>This certificate confirms that</p>

        {/* Name */}
        <div style={{position: 'relative', display: 'inline-block'}}>
          <h3 style={responsiveNameStyle}>
            {data.name}
            <div style={nameGlowStyle}>{data.name}</div>
          </h3>
        </div>

        {/* Achievement */}
        <p style={achievementTextStyle}>
          has successfully demonstrated exceptional competency and completed the comprehensive internship program in
        </p>
        <h4 style={responsiveDomainStyle}>{data.domain}</h4>

        {/* Middle Section with QR Code */}
        <div style={responsiveMiddleSectionStyle}>
          {/* Duration */}
          <div style={durationStyle}>
            <p style={{color: '#9ca3af', fontSize: '14px', marginBottom: '12px', fontWeight: '600', textTransform: 'uppercase'}}>Program Timeline</p>
            <div style={durationBoxStyle}>
              <p style={{color: '#22c55e', fontSize: '12px', fontWeight: '600', margin: '0 0 4px 0'}}>START DATE</p>
              <p style={{color: '#ffffff', fontSize: '16px', fontWeight: '700', margin: 0}}>{data.startDate}</p>
            </div>
            <div style={durationBoxStyle}>
              <p style={{color: '#22c55e', fontSize: '12px', fontWeight: '600', margin: '0 0 4px 0'}}>END DATE</p>
              <p style={{color: '#ffffff', fontSize: '16px', fontWeight: '700', margin: 0}}>{data.endDate}</p>
            </div>
          </div>

          {/* QR Code for Verification */}
          <div style={qrSectionStyle}>
            <div style={qrContainerStyle}>
              <div style={qrGlowStyle}></div>
              <img 
                src={qrCodeUrl} 
                alt="Certificate Verification QR Code"
                style={{width: '120px', height: '120px', display: 'block'}}
              />
            </div>
            <p style={{fontSize: '12px', color: '#9ca3af', marginTop: '12px', fontWeight: '500'}}>
              {verificationUrl ? 'SCAN FOR VERIFICATION' : 'CERTIFICATE DATA'}
            </p>
          </div>

          {/* Certificate ID */}
          <div style={certIdStyle}>
            <p style={{color: '#9ca3af', fontSize: '14px', marginBottom: '12px', fontWeight: '600', textTransform: 'uppercase'}}>Certificate ID</p>
            <div style={certIdBoxStyle}>
              <p style={{color: '#22c55e', fontSize: '12px', fontWeight: '600', margin: '0 0 4px 0'}}>UNIQUE ID</p>
              <p style={{
                fontFamily: 'monospace',
                fontWeight: '700',
                color: '#ffffff',
                fontSize: '16px',
                margin: 0,
                letterSpacing: '1px'
              }}>
                {data.certId}
              </p>
            </div>
          </div>
        </div>

        {/* Signatures */}
        <div style={responsiveSignaturesStyle}>
          <div style={signatureStyle}>
            <p style={{color: '#9ca3af', fontSize: '14px', marginBottom: '20px', fontWeight: '600', textTransform: 'uppercase'}}>Technical Director</p>
            <div style={signatureLineStyle}></div>
            <p style={{color: '#ffffff', fontWeight: '600', fontSize: '16px', marginBottom: '4px'}}>Alex Thompson</p>
            <p style={{color: '#9ca3af', fontSize: '12px'}}>Director of Technology</p>
          </div>
          <div style={signatureStyle}>
            <p style={{color: '#9ca3af', fontSize: '14px', marginBottom: '20px', fontWeight: '600', textTransform: 'uppercase'}}>Chief Executive</p>
            <div style={signatureLineStyle}></div>
            <p style={{color: '#ffffff', fontWeight: '600', fontSize: '16px', marginBottom: '4px'}}>Maria Garcia</p>
            <p style={{color: '#9ca3af', fontSize: '12px'}}>Chief Executive Officer</p>
          </div>
        </div>

        {/* Footer */}
        <div style={responsiveFooterStyle}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px'}}>
            <div>
              <p style={{margin: '0 0 4px 0', color: '#22c55e', fontWeight: '600'}}>Certificate Issued:</p>
              <p style={{margin: 0, color: '#d1d5db'}}>
                {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div style={{textAlign: isSmallScreen ? 'center' : 'right'}}>
              <p style={{margin: 0, fontSize: '12px', opacity: 0.8}}>
                This certificate validates the successful completion of our professional internship program
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}