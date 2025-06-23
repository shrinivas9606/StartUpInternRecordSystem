import React from "react";

export default function Template3({ data = {
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
    background: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    border: '2px solid #e5e7eb',
    overflow: 'hidden',
    position: 'relative'
  };

  const backgroundPatternStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.03,
    background: `
      radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%), 
      radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)
    `
  };

  const innerBorderStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    right: '20px',
    bottom: '20px',
    border: '4px double #fbbf24',
    borderRadius: '15px',
    pointerEvents: 'none'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 10,
    padding: '60px 40px',
    textAlign: 'center',
    fontFamily: '"Times New Roman", serif'
  };

  const headerBadgeStyle = {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 30px',
    boxShadow: '0 10px 25px rgba(251, 191, 36, 0.3)'
  };

  const innerBadgeStyle = {
    width: '60px',
    height: '60px',
    background: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #d97706 0%, #fbbf24 50%, #d97706 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '20px',
    letterSpacing: '3px'
  };

  const subtitleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    color: '#475569',
    marginBottom: '40px',
    letterSpacing: '8px',
    textTransform: 'uppercase'
  };

  const presentedToStyle = {
    fontSize: '18px',
    color: '#64748b',
    marginBottom: '15px',
    fontWeight: '300'
  };

  const nameStyle = {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '30px',
    position: 'relative',
    display: 'inline-block'
  };

  const nameUnderlineStyle = {
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '75%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent 0%, #fbbf24 50%, transparent 100%)'
  };

  const achievementTextStyle = {
    fontSize: '18px',
    color: '#64748b',
    marginBottom: '10px',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto 10px'
  };

  const domainStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #d97706 0%, #fbbf24 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '40px'
  };

  const middleSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '50px',
    flexWrap: 'wrap',
    gap: '30px'
  };

  const durationStyle = {
    textAlign: 'left',
    flex: '1',
    minWidth: '150px'
  };

  const qrSectionStyle = {
    textAlign: 'center',
    flex: '0 0 auto'
  };

  const certIdStyle = {
    textAlign: 'right',
    flex: '1',
    minWidth: '150px'
  };

  const qrContainerStyle = {
    background: '#ffffff',
    padding: '15px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    border: '3px solid #fef3c7',
    display: 'inline-block'
  };

  const signaturesStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    marginBottom: '40px'
  };

  const signatureStyle = {
    textAlign: 'center'
  };

  const signatureLineStyle = {
    width: '200px',
    height: '1px',
    background: '#64748b',
    margin: '0 auto 8px'
  };

  const footerStyle = {
    borderTop: '1px solid #e2e8f0',
    paddingTop: '25px',
    color: '#94a3b8',
    fontSize: '12px'
  };

  const cornerDecorationStyle = {
    position: 'absolute',
    width: '40px',
    height: '40px',
    border: '3px solid #fbbf24'
  };

  // Responsive adjustments
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 768;
  
  const responsiveContentStyle = {
    ...contentStyle,
    padding: isSmallScreen ? '40px 20px' : '60px 40px'
  };

  const responsiveTitleStyle = {
    ...titleStyle,
    fontSize: isSmallScreen ? '32px' : '48px'
  };

  const responsiveNameStyle = {
    ...nameStyle,
    fontSize: isSmallScreen ? '28px' : '42px'
  };

  const responsiveMiddleSectionStyle = {
    ...middleSectionStyle,
    flexDirection: isSmallScreen ? 'column' : 'row',
    textAlign: 'center'
  };

  const responsiveSignaturesStyle = {
    ...signaturesStyle,
    gridTemplateColumns: isSmallScreen ? '1fr' : '1fr 1fr',
    gap: isSmallScreen ? '40px' : '60px'
  };

  return (
    <div style={containerStyle}>
      {/* Background Pattern */}
      <div style={backgroundPatternStyle}></div>
      
      {/* Decorative Border */}
      <div style={innerBorderStyle}></div>
      
      {/* Corner Decorations */}
      <div style={{...cornerDecorationStyle, top: '15px', left: '15px', borderRight: 'none', borderBottom: 'none', borderTopLeftRadius: '8px'}}></div>
      <div style={{...cornerDecorationStyle, top: '15px', right: '15px', borderLeft: 'none', borderBottom: 'none', borderTopRightRadius: '8px'}}></div>
      <div style={{...cornerDecorationStyle, bottom: '15px', left: '15px', borderRight: 'none', borderTop: 'none', borderBottomLeftRadius: '8px'}}></div>
      <div style={{...cornerDecorationStyle, bottom: '15px', right: '15px', borderLeft: 'none', borderTop: 'none', borderBottomRightRadius: '8px'}}></div>

      {/* Content */}
      <div style={responsiveContentStyle}>
        {/* Header Badge */}
        <div style={headerBadgeStyle}>
          <div style={innerBadgeStyle}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="20" height="20" fill="#ffffff" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 style={responsiveTitleStyle}>CERTIFICATE</h1>
        <div style={{
          width: '160px',
          height: '4px',
          background: 'linear-gradient(90deg, transparent 0%, #fbbf24 50%, transparent 100%)',
          margin: '0 auto 30px'
        }}></div>
        
        <h2 style={subtitleStyle}>Of Excellence</h2>

        {/* Award Text */}
        <p style={presentedToStyle}>This certificate is proudly presented to</p>

        {/* Name */}
        <div style={{marginBottom: '30px'}}>
          <h3 style={responsiveNameStyle}>
            {data.name}
            <div style={nameUnderlineStyle}></div>
          </h3>
        </div>

        {/* Achievement */}
        <p style={achievementTextStyle}>
          For successfully completing an intensive internship program in
        </p>
        <p style={domainStyle}>{data.domain}</p>

        {/* Middle Section with QR Code */}
        <div style={responsiveMiddleSectionStyle}>
          {/* Duration */}
          <div style={durationStyle}>
            <p style={{color: '#64748b', fontSize: '14px', marginBottom: '5px'}}>Program Duration</p>
            <p style={{fontWeight: '600', color: '#1e293b', fontSize: '16px', marginBottom: '5px'}}>
              {data.startDate}
            </p>
            <div style={{width: '50px', height: '1px', background: '#cbd5e1', margin: isSmallScreen ? '8px auto' : '8px 0'}}></div>
            <p style={{fontWeight: '600', color: '#1e293b', fontSize: '16px'}}>
              {data.endDate}
            </p>
          </div>

          {/* QR Code for Verification */}
          <div style={qrSectionStyle}>
            <div style={qrContainerStyle}>
              <img 
                src={qrCodeUrl} 
                alt="Certificate Verification QR Code"
                style={{width: '120px', height: '120px', display: 'block'}}
              />
            </div>
            <p style={{fontSize: '10px', color: '#64748b', marginTop: '8px'}}>
              {verificationUrl ? 'Scan to Verify Online' : 'Certificate Details'}
            </p>
          </div>

          {/* Certificate ID */}
          <div style={certIdStyle}>
            <p style={{color: '#64748b', fontSize: '14px', marginBottom: '5px'}}>Certificate ID</p>
            <p style={{
              fontFamily: 'monospace',
              fontWeight: '600',
              color: '#1e293b',
              fontSize: '16px',
              background: '#f8fafc',
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #e2e8f0',
              display: 'inline-block'
            }}>
              {data.certId}
            </p>
          </div>
        </div>

        {/* Signatures */}
        <div style={responsiveSignaturesStyle}>
          <div style={signatureStyle}>
            <p style={{color: '#64748b', fontSize: '14px', marginBottom: '15px'}}>Program Supervisor</p>
            <div style={signatureLineStyle}></div>
            <p style={{color: '#1e293b', fontWeight: '500', fontSize: '14px'}}>Dr. Sarah Johnson</p>
            <p style={{color: '#64748b', fontSize: '12px'}}>Lead Supervisor</p>
          </div>
          <div style={signatureStyle}>
            <p style={{color: '#64748b', fontSize: '14px', marginBottom: '15px'}}>Chief Executive Officer</p>
            <div style={signatureLineStyle}></div>
            <p style={{color: '#1e293b', fontWeight: '500', fontSize: '14px'}}>Michael Chen</p>
            <p style={{color: '#64748b', fontSize: '12px'}}>CEO & Founder</p>
          </div>
        </div>

        {/* Footer */}
        <div style={footerStyle}>
          <p>
            Issued on {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
}