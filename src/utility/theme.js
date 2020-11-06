export default {
        palette: {
          primary: {
            light: '#33a095',
            main: '#00897b',
            dark: '#005f56',
            contrastText: '#fff'
          },
          secondary: {
            light: '#f6a5c0',
            main: '#f48fb1',
            dark: '#aa647b',
            contrastText: '#fff'
          }
        },
          typography: {
            useNextVariants: true
          },
        form: {
          textAlign: 'center'
        },
        image: {
          margin: '20px auto 20px auto'
        },
        pageTitle: {
          margin: '10px auto 10px auto'
        },
        textField: {
          margin: '10px auto 10px auto'
        },
        button: {
          marginTop: 20,
          position: 'relative'
        },
        inputError: {
          color: 'red',
          fontSize: '0.8rem',
          marginTop: 10
        },
        progress: {
          position: 'absolute'
        },
        invisibleSeparator: {
          border: 'none',
          margin: 4
        },
        visibleSeparator: {
          width: '100%',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          marginBottom: 20
        },
        paper: {
          padding: 20
        },
        profile: {
          '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
              position: 'absolute',
              top: '80%',
              left: '70%'
            }
          },
          '& .profile-image': {
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%'
          },
          '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
              verticalAlign: 'middle'
            },
            '& a': {
              color: '#00bcd4'
            }
          },
          '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
          },
          '& svg.button': {
            '&:hover': {
              cursor: 'pointer'
            }
          }
        },
        buttons: {
          textAlign: 'center',
          '& a': {
            margin: '20px 10px'
          }
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280
          }
        }
      };