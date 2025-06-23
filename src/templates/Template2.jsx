import React from "react";

export default function Template4({ data = {
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
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '0',
    boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.35)',
    border: 'none',
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
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 35px,
        rgba(255, 255, 255, 0.02) 35px,
        rgba(255, 255, 255, 0.02) 70px
      )
    `
  };

  const innerContainerStyle = {
    background: '#ffffff',
    margin: '40px',
    borderRadius: '15px',
    position: 'relative',
    zIndex: 10,
    overflow: 'hidden'
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#ffffff',
    padding: '40px',
    textAlign: 'center',
    position: 'relative'
  };

  const headerPatternStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
    `
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 10,
    padding: '50px 40px',
    textAlign: 'center',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: '300',
    marginBottom: '10px',
    letterSpacing: '8px',
    textTransform: 'uppercase',
    position: 'relative',
    zIndex: 2
  };

  const subtitleStyle = {
    fontSize: '18px',
    fontWeight: '400',
    opacity: 0.9,
    letterSpacing: '2px',
    position: 'relative',
    zIndex: 2
  };

  const presentedToStyle = {
    fontSize: '16px',
    color: '#64748b',
    marginBottom: '20px',
    fontWeight: '300',
    fontStyle: 'italic'
  };

  const nameStyle = {
    fontSize: '48px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '30px',
    position: 'relative',
    display: 'inline-block'
  };

  const achievementTextStyle = {
    fontSize: '18px',
    color: '#475569',
    marginBottom: '15px',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto 15px'
  };

  const domainStyle = {
    fontSize: '32px',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '50px',
    position: 'relative'
  };

  const domainUnderlineStyle = {
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120px',
    height: '3px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '2px'
  };

  const middleSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '60px',
    flexWrap: 'wrap',
    gap: '40px',
    background: '#f8fafc',
    padding: '30px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0'
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
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.15)',
    border: '3px solid #e0e7ff',
    display: 'inline-block',
    position: 'relative'
  };

  const qrCornerStyle = {
    position: 'absolute',
    width: '20px',
    height: '20px',
    border: '3px solid #667eea'
  };

  const signaturesStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    marginBottom: '40px'
  };

  const signatureStyle = {
    textAlign: 'center',
    position: 'relative'
  };

  const signatureLineStyle = {
    width: '220px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent 0%, #667eea 50%, transparent 100%)',
    margin: '0 auto 12px'
  };

  const footerStyle = {
    borderTop: '2px solid #e2e8f0',
    paddingTop: '30px',
    color: '#64748b',
    fontSize: '14px',
    background: '#f8fafc',
    margin: '0 -40px -50px',
    padding: '30px 40px'
  };

  const hexagonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '60px',
    height: '52px',
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'rotate(30deg)',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
  };

  // Responsive adjustments
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 768;
  
  const responsiveContainerStyle = {
    ...containerStyle,
    maxWidth: isSmallScreen ? '100%' : '900px'
  };

  const responsiveInnerContainerStyle = {
    ...innerContainerStyle,
    margin: isSmallScreen ? '20px' : '40px'
  };

  const responsiveHeaderStyle = {
    ...headerStyle,
    padding: isSmallScreen ? '30px 20px' : '40px'
  };

  const responsiveContentStyle = {
    ...contentStyle,
    padding: isSmallScreen ? '30px 20px' : '50px 40px'
  };

  const responsiveTitleStyle = {
    ...titleStyle,
    fontSize: isSmallScreen ? '24px' : '36px',
    letterSpacing: isSmallScreen ? '4px' : '8px'
  };

  const responsiveNameStyle = {
    ...nameStyle,
    fontSize: isSmallScreen ? '32px' : '48px'
  };

  const responsiveDomainStyle = {
    ...domainStyle,
    fontSize: isSmallScreen ? '24px' : '32px'
  };

  const responsiveMiddleSectionStyle = {
    ...middleSectionStyle,
    flexDirection: isSmallScreen ? 'column' : 'row',
    textAlign: 'center',
    padding: isSmallScreen ? '20px' : '30px'
  };

  const responsiveSignaturesStyle = {
    ...signaturesStyle,
    gridTemplateColumns: isSmallScreen ? '1fr' : '1fr 1fr',
    gap: isSmallScreen ? '50px' : '80px'
  };

  return (
    <div style={responsiveContainerStyle}>
      {/* Background Pattern */}
      <div style={backgroundPatternStyle}></div>
      
      {/* Inner Container */}
      <div style={responsiveInnerContainerStyle}>
        {/* Header */}
        <div style={responsiveHeaderStyle}>
          <div style={headerPatternStyle}></div>
          <div style={hexagonStyle}></div>
          <h1 style={responsiveTitleStyle}>Certificate</h1>
          <p style={subtitleStyle}>OF ACHIEVEMENT</p>
        </div>

        {/* Content */}
        <div style={responsiveContentStyle}>
          {/* Award Text */}
          <p style={presentedToStyle}>This is to certify that</p>

          {/* Name */}
          <h2 style={responsiveNameStyle}>{data.name}</h2>

          {/* Achievement */}
          <p style={achievementTextStyle}>
            has successfully completed the comprehensive internship program in
          </p>
          <div style={{position: 'relative', display: 'inline-block'}}>
            <h3 style={responsiveDomainStyle}>{data.domain}</h3>
            <div style={domainUnderlineStyle}></div>
          </div>

          {/* Middle Section with QR Code */}
          <div style={responsiveMiddleSectionStyle}>
            {/* Duration */}
            <div style={durationStyle}>
              <p style={{color: '#475569', fontSize: '14px', marginBottom: '8px', fontWeight: '600'}}>PROGRAM DURATION</p>
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#ffffff',
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '8px'
              }}>
                <p style={{fontSize: '14px', fontWeight: '600', margin: 0}}>FROM</p>
                <p style={{fontSize: '16px', fontWeight: '700', margin: 0}}>{data.startDate}</p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                color: '#ffffff',
                padding: '12px 16px',
                borderRadius: '8px'
              }}>
                <p style={{fontSize: '14px', fontWeight: '600', margin: 0}}>TO</p>
                <p style={{fontSize: '16px', fontWeight: '700', margin: 0}}>{data.endDate}</p>
              </div>
            </div>

            {/* QR Code for Verification */}
            <div style={qrSectionStyle}>
              <div style={qrContainerStyle}>
                <div style={{...qrCornerStyle, top: '5px', left: '5px', borderRight: 'none', borderBottom: 'none'}}></div>
                <div style={{...qrCornerStyle, top: '5px', right: '5px', borderLeft: 'none', borderBottom: 'none'}}></div>
                <div style={{...qrCornerStyle, bottom: '5px', left: '5px', borderRight: 'none', borderTop: 'none'}}></div>
                <div style={{...qrCornerStyle, bottom: '5px', right: '5px', borderLeft: 'none', borderTop: 'none'}}></div>
                <img 
                  src={qrCodeUrl} 
                  alt="Certificate Verification QR Code"
                  style={{width: '120px', height: '120px', display: 'block'}}
                />
              </div>
              <p style={{fontSize: '12px', color: '#64748b', marginTop: '10px', fontWeight: '500'}}>
                {verificationUrl ? 'SCAN TO VERIFY' : 'CERTIFICATE DATA'}
              </p>
            </div>

            {/* Certificate ID */}
            <div style={certIdStyle}>
              <p style={{color: '#475569', fontSize: '14px', marginBottom: '8px', fontWeight: '600'}}>CERTIFICATE ID</p>
              <div style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                padding: '16px',
                position: 'relative'
              }}>
                <p style={{
                  fontFamily: 'monospace',
                  fontWeight: '700',
                  color: '#1e293b',
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
              <p style={{color: '#475569', fontSize: '14px', marginBottom: '20px', fontWeight: '600', textTransform: 'uppercase'}}>Program Director</p>
              <div style={signatureLineStyle}></div>
              <p style={{color: '#1e293b', fontWeight: '600', fontSize: '16px', marginBottom: '4px'}}>Dr. Emily Rodriguez</p>
              <p style={{color: '#64748b', fontSize: '12px'}}>Director of Programs</p>
            </div>
            <div style={signatureStyle}>
              <p style={{color: '#475569', fontSize: '14px', marginBottom: '20px', fontWeight: '600', textTransform: 'uppercase'}}>Chief Executive</p>
              <div style={signatureLineStyle}></div>
              <p style={{color: '#1e293b', fontWeight: '600', fontSize: '16px', marginBottom: '4px'}}>James Mitchell</p>
              <p style={{color: '#64748b', fontSize: '12px'}}>Chief Executive Officer</p>
            </div>
          </div>

          {/* Footer */}
          <div style={footerStyle}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px'}}>
              <p style={{margin: 0}}>
                <strong>Issued:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p style={{margin: 0, opacity: 0.7}}>
                This certificate verifies successful completion of the internship program
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}